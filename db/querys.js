const connection = require("./connection");

class Querys {
  constructor(connection) {
    this.connection = connection;
  }

  getDepartments() {
    return this.connection.promise().query("SELECT * FROM department;");
  }

  getRoles() {
    // job title, role id, the department that role belongs to, and the salary for that role
    return this.connection
      .promise()
      .query(
        "SELECT * FROM role.title, role.id, department.name AS departmentName, role.salary FROM role JOIN department ON role.department_id = department.id;"
      );
  }
  getEmployees() {
    // I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee,last_name, role.title"
      );
  }
}

module.exports = new Querys(connection);
