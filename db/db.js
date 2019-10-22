const mysql = require("mysql");
const keys = require("../config/keys");

const db = mysql.createConnection({
  host: keys.MYSQL_HOST,
  user: keys.MYSQL_USER,
  password: keys.MYSQL_PASS,
  database: keys.MYSQL_DATABASE
});

db.connect(err => {
  if (err) throw err;
  console.log("connected to database...");
});

// db.end();

module.exports = db;
