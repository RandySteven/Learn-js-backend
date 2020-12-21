const express = require('express');
const mysql = require('mysql2');

const userRole = require('./src/routes/users');

const conn = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'learn_mysql'
});

const app = express();

app.use('/user', userRole);

app.get('/', (req, res)=>{
    let query = "SELECT * FROM users";
    conn.query(query, (err, result, field)=>{
        res.send({message:"Hello World", data:result});
    });
});

app.listen(3000, console.log("Sudah masuk"));