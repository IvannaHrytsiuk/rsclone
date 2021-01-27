const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db.config.js');
const config = require('../config/config.js');

const User = db.user;
const Role = db.role;

exports.signup = (req, res) => {
    console.log('Processing func -> SignUp');

    User.create({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        birth: req.body.birth,
    }).then(() => {
        res.send({ status: 'User registered successfully!' });
    }).catch((err) => {
        res.status(500).send(`Error -> ${err}`);
    });
};

exports.signin = (req, res) => {
    console.log('Sign-In');
    console.log(req.body)
    User.findOne({
        where: {
            email: req.body.email,
        },
    }).then((user) => {
        if (!user) {
            return res.status(404).send('User Not Found.');
        }

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({ auth: false, accessToken: null, reason: 'Invalid Password!' });
        }

        const token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400, // expires in 24 hours
        });

        res.status(200).send({ auth: true, accessToken: token });
    }).catch((err) => {
        res.status(500).send(`Error -> ${err}`);
    });
};

exports.userContent = (req, res) => {
    User.findOne({
        where: { id: req.userId },
        attributes: ['fname', 'lname', 'email', 'birth'],
        include: [{
            model: Role,
            attributes: ['id', 'name'],
            through: {
                attributes: ['userId', 'roleId'],
            },
        }],
    }).then((user) => {
        res.status(200).json({
            description: 'User Content Page',
            user,
        });
    }).catch((err) => {
        res.status(500).json({
            description: 'Can not access User Page',
            error: err,
        });
    });
};
