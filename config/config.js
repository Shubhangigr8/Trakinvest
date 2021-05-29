require("dotenv").config();
module.exports = {
  "development": {
    "username": process.env.db_username,
    "password": process.env.db_password,
    "database": process.env.db_name,
    "host": process.env.db_host,
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "password",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "password",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
