require( 'dotenv' ).config();

module.exports = {
  "development": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PWD || "password",
    "database": process.env.DB_DATABASE || "orm_example",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": process.env.DB_DIALECT || "mysql"
  },
  "test": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PWD || "password",
    "database": process.env.DB_DATABASE || "orm_example",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": process.env.DB_DIALECT || "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
process.env.DB_USER