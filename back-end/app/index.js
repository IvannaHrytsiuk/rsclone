const express = require('express');
const mysql = require('mysql2');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./app/router/router.js')(app);

const db = require('./app/config/db.config.js');

const Role = db.role;
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
//   initial();
// });
const server = app.listen(8080, () => {
    const host = server.address().address;
    const { port } = server.address();
    console.log('App listening at http://%s:%s', host, port);
});

// function initial(){
//   Role.create({
//     id: 1,
//     name: "USER"
//   });
//   Role.create({
//     id: 2,
//     name: "ADMIN"
//   });
// }

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123qaz',
    database: 'rsclone',
    multipleStatements: true,
});

mysqlConnection.connect((error) => {
    if (error) throw error;
    console.log('Connected');
});

app.get('/users', (req, res) => {
    mysqlConnection.query('SELECT u.* FROM users u left join user_roles ur on u.id = ur.userId where ur.roleId = 1;', (err, rows, filed)=>{
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});
