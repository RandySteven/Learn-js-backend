const express = require('express');

const userRole = require('./src/routes/users');


const app = express();

app.use(express.urlencoded({extended:true}));

app.use('/user/', userRole);

// app.get('/', (req, res)=>{
//     let query = "SELECT * FROM users";
//     conn.query(query, (err, result, field)=>{
//         res.send({message:"Hello World", data:result});
//     });
// });

app.listen(3000, console.log("Sudah masuk"));