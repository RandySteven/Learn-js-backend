const express = require('express');

const {addUser, getUser, updateUser, deleteUser} = require('../controller/users');

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
        .get(getUser)
        .post(addUser);

router
    .route('/:userId')
    .get(getUser)
        .patch(updateUser)
        .delete(deleteUser);

module.exports = router;