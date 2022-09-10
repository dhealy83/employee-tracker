const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Poops247!",
  database: "team_tracker_db",
});

module.exports = db;
