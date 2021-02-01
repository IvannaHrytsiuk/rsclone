const db = require('../config/db.config.js');

const User = db.user;

checkDuplicateEmail = (req, res, next) => {
    // -> Check Email is already in use
    User.findOne({
        where: {
            email: req.body.email,
        },
    }).then((user) => {
        if (user) {
            res.status(400).send('Fail -> Email is already in use!');
            return;
        }
        console.log(user)
        next();
    });
};

const signUpVerify = {};
signUpVerify.checkDuplicateEmail = checkDuplicateEmail;

module.exports = signUpVerify;
