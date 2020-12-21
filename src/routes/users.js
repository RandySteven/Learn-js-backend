const express = require('express');

const router = express.Router();
/*
(GET) localhost:3000/user/ -> ambil semua user
(POST) localhost:3000/user/ -> nambahin user
(GET) localhost:3000/user/:userId
(PATCH) localhost:3000/user/:userId -> update user dari request body
(DELETE) localhost:3000/user/:userId -> untuk delete userId
*/

router
    .route('/')
        .get((req, res)=> res.send({message:"GET all user"}))
        .post((req, res)=> res.post({message:"POST user"}));

router
    .route('/:userId')
    .get((req, res)=> res.send({message:"GET user"}))
        .patch((req, res)=> res.send({message:"PATCH user"}))
        .delete((req, res)=> res.post({message:"DELETE user"}));

module.exports = router;