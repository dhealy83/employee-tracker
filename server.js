const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Poops247!",
    database: "team_tracker_db",
  },
  console.log(`Connected to the team tracker database.`)
);

inquirer
  .prompt({
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "View all departments.",
      "View all roles.",
      "View all employees.",
      "Add a department", //more than a db query I need to use an inquirer prompt first asking for the details. insertInto.<{department}>
      "Add a role.",
      "Add an employee.",
      "Update employee role.",
    ],
  })
  .then((answer) => {
    switch (answer.action) {
      case "View all departments.":
        viewAllDepartments();
        break;
      default:
        break;
    }
  });

const viewAllDepartments = () => {
  db.query("SELECT * FROM department;", (err, data) => {
    console.table(data);
  });
};
