const connection = require('../config/database');
const getAllUsers = async () => {
let [results,fields] = await connection.query('select * from Users');
return results
}

const updateUserById = async (email,name,city,userId)=> {
let [results,fields] = await connection.query(
    `UPDATE Users  
    SET email = ?,name = ?,City = ?
    WHERE id = ?`,[email,name,city,userId],);
}
module.exports={
    getAllUsers,
    updateUserById,
}