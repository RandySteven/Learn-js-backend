const pool = require('../config/db');
/**
 * Add user controller
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const addUser = async (req, res) => {
    const conn = await pool.getConnection();
    try {
        const {email, password} = req.body;
        let query = `INSERT INTO users (email, password) VALUES (?, ?)`;
        const [result] = await conn.execute(query, [email, password]);
        await conn.release();
        res.json({message:'POST user', data:req.body})
    } catch (error) {
        await conn.release();
        res.send({message:'POST insert user failed', error:error})        
    }
}

/**
 * Get user controller
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const getUser = async (req, res) => {
    const {userId} = req.params;
    const conn = await pool.getConnection();
    let query = "", users;
    if(userId!=undefined){
        query = `SELECT * FROM users WHERE id=? AND deleted_at IS NULL`; 
        [users] = await conn.execute(query, [userId]);
    }else{
        query = "SELECT * FROM users WHERE deleted_at is NULL";
        [users] = await conn.query(query);
    }
    await conn.release();
    res.send({message:'Get all user', data:users})
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
    res.post({message:"DELETE user"});
}


module.exports = {
    addUser, getUser, updateUser, deleteUser
}