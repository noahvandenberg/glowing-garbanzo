require("dotenv").config('./.env');

// PG database client/connection setup
const { Pool } = require("pg");

let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };
}

const db = new Pool(dbParams);
console.log('logging db', db)
db.connect((data) => {
  console.log('connected to database');
  
});

module.exports = db;