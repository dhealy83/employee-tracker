const inquirer = require("inquirer");
require("console.table");
const db = require("./db/querys");
const db2 = require("./db/connection");

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
        "Add a department.", //more than a db query I need to use an inquirer prompt first asking for the details. insertInto.<{department}>
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
        case "Add a department.":
          addDepartment();
          break;
        case "Add a role.":
          addRole();
          break;
        case "Add an employee.":
          addEmployee();
          break;
        // case "Update employee role.":
        //   updateRole();
        //   break;
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

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDept",
        message: "What is the new department?",
      },
    ])
    .then((department) => {
      let newDept = department.addDept;
      let sql = `INSERT INTO department (name)
              VALUES (?)`;
      db2.query(sql, newDept, (err, res) => {
        if (err) throw err;
        console.info("");
        console.info(`Added ${newDept} to Departments.`);
        console.info("");

        start();
      });
    });
};
const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addRole",
        message: "What is the new role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is ths salary for this role?",
      },
      {
        type: "input",
        name: "department_id",
        message: "What is the department_id?",
      },
    ])
    .then((role) => {
      let newRole = role.addRole;
      let sql = `INSERT INTO role VALUES (default, "${newRole}", "${role.salary}", "${role.department_id}")`;
      db2.query(sql, (err, res) => {
        if (err) throw err;
        console.info("");
        console.info(`Added ${newRole} to roles.`);
        console.info("");

        start();
      });
    });
};
const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "addEmp",
        message: "Do you want to add an employee?",
      },
      {
        type: "input",
        name: "first_name",
        message: "What is the new employees first_name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the new employees last_name?",
      },
      {
        type: "input",
        name: "role",
        message: "What is the employees role?",
      },
      {
        type: "input",
        name: "manager",
        message: "Who is the employees manager?",
      },
    ])
    .then((emp) => {
      let newEmp = emp.addDept;
      let sql = `INSERT INTO employee VALUES (default, "${newEmp}", "${last_name}", "${role}", "${manager}")`;
      db2.query(sql, newEmp, (err, res) => {
        if (err) throw err;
        console.info("");
        console.info(`Added ${newEmp} to employees.`);
        console.info("");

        start();
      });
    });
};
