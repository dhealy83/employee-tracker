const inquirer = require("inquirer");
require("console.table");
const db = require("./db/querys");

start();
function start() {
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
        case "View all roles.":
          viewAllRoles();
          break;
        case "View all employees.":
          viewAllEmployees();
          break;
      }
    });
}

const viewAllDepartments = () => {
  db.getDepartments()
    .then(([departments]) => {
      console.table(departments);
    })
    .then(() => start());
};
const viewAllRoles = () => {
  db.getRoles()
    .then(([role]) => {
      console.table(role);
    })
    .then(() => start());
};
const viewAllEmployees = () => {
  db.getEmployees()
    .then(([employees]) => {
      console.table(employees);
    })
    .then(() => start());
};
