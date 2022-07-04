const mysql = require( 'mysql2/promise' );
require( 'dotenv' ).config();

// const connection = mysql.createPool({
//   host: process.env.HOST,
//   user: process.env.ROOT,
//   password: process.env.PWD,
//   database: process.env.DATABASE,
//   port: process.env.PORT
//   });

// module.exports = connection;

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'model_example2',
  });

module.exports = connection;