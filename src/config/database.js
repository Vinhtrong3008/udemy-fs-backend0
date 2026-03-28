const mysql = require('mysql2/promise');
require('dotenv').config();

//create a conection
// const connection =  mysql.createConnection({
//   host: process.env.DB_HOST,
//   // port: process.env.DB_PORT,cách viết chuẩn nm đang lỗi không biết tại sao  //defaule 3307
//   port:3307,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

const connection =  mysql.createPool({
  host: process.env.DB_HOST,
  // port: process.env.DB_PORT,cách viết chuẩn nm đang lỗi không biết tại sao  //defaule 3307
  port:3307,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
module.exports = connection;
