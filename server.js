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
                allController.displayAll(mainMenu) // from line 8
                break;
            case
        }
      })
}