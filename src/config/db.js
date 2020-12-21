const mysql = require('mysql2');

const conn = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'learn_mysql',
    connectionLimit: 20
});

module.exports = conn.promise();