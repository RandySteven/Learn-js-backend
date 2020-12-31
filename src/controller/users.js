const conn = require('../config/db');
/**
 * Add user controller
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const addUser = async (req, res) => {
    const {email, password} = req.body;
    const conn = await pool.getConnection();
    let query = `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`;
    const [result] = await conn.query(query);
    res.send({message:"POST user"});
}

/**
 * Get user controller
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const getUser = async (req, res) => {
    const query = "SELECT * FROM users WHERE deleted_at IS NULL";
    const [users] = await conn.query(query);
    return res.send({message:"GET all user", data:users});
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const updateUser = (req, res) => {
    res.send({message:"PATCH user"});
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const deleteUser = (req, res) => {
    res.post({message:"DELETE user"})
}


module.exports = {
    addUser, getUser, updateUser, deleteUser
}