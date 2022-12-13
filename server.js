// dependencies imported into application
const inquirer = require('inquirer');

// controllers
const db = require('./db/connection');

// Functions
const mainMenu = async () => {
    console.log('Welcome to the Employee Teacker Application ');

    // Use inquirer to prompt users with different options/choices
    await inquirer
      .prompt({
        name: "",
        type: "list",
        message: "Main Menu",
        choices: [
            "View All Employees",
            "View All Employees by ROLE",
            "View All Employees by DEPARTMENT",
            "View All Employees by MANAGER",
            "Add Employee",
            "Add Department",
            "Update Employee ROLE",
            "Update Employee MANAGER",
            "Delete Employee",
            "Delete ROLE",
            "Delete DEPARTMENT",
            "View Department Budgets",
        ],
      })
      .then((answer) => {
        // user answer into the switch case
        switch (answer.action) {
            case "View All Employees":
                allController.displayAll(mainMenu); // from line 8
                break;
            case "View All Employees by ROLE":
                roleController.displayAllRoles(mainMenu);
                break;
            case "View All Employees by DEPARTMENT":
                departmentController.displayAllDept(mainMenu);
                break;
            case "View All Employees by MANAGER":
                employeeController.displayAllManager(mainMenu);
                break;
            case "Add Employee":
                roleController.addEmployee(mainMenu);
                break;
            case "Add Department":
                departmentController.addDepartment(mainMenu);
                break;
            case "Update Employee ROLE":
                roleController.updateRole(mainMenu);
                break;
            case "Update Employee MANAGER":
                employeeController.updateManager(mainMenu);
                break;
            case "Delete Employee":
                employeeController.deleteEmployee(mainMenu);
                break;
            case "Delete ROLE":
                roleController.deleteRole(mainMenu);
                break;
            case "Delete DEPARTMENT":
                departmentController.deleteDepartment(mainMenu);
                break;
        }
      });
};

// call the mainMenu function
mainMenu();