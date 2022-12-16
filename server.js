// require inquirer
const inquirer = import('inquirer');
const appConnection = require('./db/connection');
const database = require('./db/connection');

// connect the database
appConnection.connect(err => {
    if (err)throw err;
    console.log('The database is properly connected!');
    
    // call function here from line 15
    terminalPrompt();
})

// This is what will appear in the terminal
function terminalPrompt() {
    inquirer.createPromptModule([
        {
            // we need a list of choices to appear
            type: "list",
            name: "answers",
            message: "Select one of the following choices",
            choices: [
                'View All Roles',
                'View All Employees',
                'View All Departments',
                'Add Role',
                "Add an employee",
                "Add a department",
                "Update an employee role",
            ]
        }

    ]).then((answers) => {
        if(answers.answers === 'View All Roles') {
            appConnection.query(`SELECT * FROM roles`, (err, result) => {
              if (err) {
                console.log(err);
                return err;
              }
              console.log('Viewing all the Roles: ');
              console.table(result);
              terminalPrompt();
            });

        } else if (answers.answers === 'View All Employees') {
            appConnection.query(`SELECT * FROM employee`, (err, result) => {
                if (err) {
                    console.log(err);
                    return err;
                }
                console.log('Viewing all the employees: ');
                console.table(result);
                terminalPrompt();
            });
            
        } else if (answers.answers === 'View All departments') {
            appConnection.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    return err;
                }
                console.log('Now viewing all the departments: ');
                console.table(result);
                terminalPrompt();
            });

        } else if (answers.answers === 'Add a department') {
            inquirer.prompt([{
                // not a list for this section, but add an input
                type: 'input',
                name: 'department_name',
                message: 'What department name would you like to add?',
                validate: choiceOFDepartment => {
                    if(choiceOFDepartment) {
                        return true;
                    } else {
                        console.log('Please add a department');
                        return false;
                    }
                }

            }]).then((choiceOFDepartment) => {
                appConnection.query(`INSERT INTO department (department_name) VALUES ()`, [choiceOFDepartment.choiceOFDepartment], (err, result) => {
                    if (err) {
                        console.log(err);
                        return err;
                    }
                    console.log(`Added ${answers.department} to the Database`)
                    terminalPrompt();
                });

            })

        } else if (answers.answers === 'Add Role') {
            appConnection.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    console.log(err);
                    return err;
                }

                inquirer.prompt([{
                    // input the role
                    type: 'input',
                    name: 'roles',
                    message: 'Please enter the role name',
                    validate: choiceOFRole => {
                        if (choiceOFRole) {
                            return true;
                        } else {
                            console.log('Please enter a role!');
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'department',
                    message: 'Enter the department for the role',

                }]).then =((answers) => { appConnection.query(`INSERT INTO roles (title, salary, department_id) VALUES ()`, [answers.roles, answers.department], (err, result) => {
                    if (err) {
                        console.log(err);
                        return err;
                    }
                    console.log(`added ${answers.roles} to the database!`)
                    terminalPrompt();
                })
              })
            });

        } else if (answers.answers === 'Add an employee') {
            appConnection.query(`SELECT * FROM employee`, (err, employees) => {
                if (err) {
                    console.log(err);
                    return err;
                }

                // declare const for manager
                const managerOption = employees.map(({id, first_name, last_name}) => ({
                    name: `${first_name} ${last_name}`,
                value: id                
            }));

            managerOption.unshift({name: "n/a", value: null})
            inquirer.prompt([{
                // place type/name/message here
                type: 'input',
                name: 'first_name',
                message: 'Employees First Name: ',
                validate: firstName => {
                    if (firstName) {
                        return true;
                    } else {
                        console.log('Please add a first name!');
                        return false;
                    }
                }
            },

            {
              type: 'input',
              name: 'last_name',
              message: 'Employee Last Name',
              validate: lastName => {
                if (lastName) {
                    return true;
                } else {
                    console.log('Please Enter a last name!');
                    return false;
                }
              }
            },
            {
                type: 'list',
                name: 'manager_id',
                message: 'Employee manager',
                choices: 'managerChoice',
            }
        ]).then((answers) => {
            var last_name = answers.lastName;
            var first_name = answers.firstName;
            var manager_id = answers.manager_id;

            appConnection.query(`SELECT * FROM roles`, (err, roles) => {
                if (err) {
                    console.log(err);
                    return err;
                }

                const userRoleChoice = roles.map(({id, title}) => ({
                    name: title,
                    value: id,
                }))


                inquirer.prompt([{
                    // need list option here
                    type: 'list',
                    name: 'role_id',
                    message: 'Please select a role for said employee!',
                    choices: userRoleChoice,

                }]).then(({role_id}) => {
                    let employee = {
                        first_name, last_name, manager_id, role_id
                    }

                    appConnection.query('INSERT INTO employee SET ', employee, (err) => {
                        if (err) {
                            console.log(err);
                            return err;
                        }

                        console.log(`successfully added ${first_name} ${last_name} to the database!`)
                        terminalPrompt();
                    })
                })
            })
        })
            })
        } else if (answers.answers === 'Update an employee role') {
            appConnection.query(`SELECT * FROM employee, role`, (err, result) => {
                if (err) {
                    console.log(err);
                    return err;
                }

                inquirer.prompt([{
                    type: 'input',
                    name: 'employee',
                    message: 'Employee role: ',
                    choices: () => {

                        // add an array with for loop below
                        var employeeArray = [];

                        for (var i = 0; i < result.length; i++) {
                            employeeArray.push(result[i].last_name)
                        }

                        var array = [...new Set(employeeArray)];
                        return array;
                    }
                },
                {
                    type: 'input',
                    name: 'role',
                    message: 'Updated new role',
                    // create choices here
                    choices: () => {
                        var array2 = [];

                        // add another for loop here
                        for (var i = 0; i < result.length; i++) {
                            array2.push(result[i].title)
                        }

                        var newArray2 = [...new Set(array2)];
                        return newArray2;
                    }
                },

            ]).then((answers) => {
                // add another for loop

                for (var i = 0; i < result.length; i++) {
                    if(result[i].title === answers.employee) {
                        var name = result[i];
                    } 
                }

                // add another for loop
                for (var i = 0; i < result.length; i++) {
                    var employeeRole = result[i];
                }
            },
            
            appConnection.query(`UPDATE employee SET ? WHERE ?`, [{ role_id: employeeRole}, {last_name: name}], (err, result) => {
                if (err) {
                    console.log(err);
                    return err;
                }

                console.log(`successfully added ${answers.employee} to the database!`)
                terminalPrompt();
            }));
            })
        }
    })
};



appConnection.connect((err) => {
    if (err) throw err;
    console.log('Database is connected');
    terminalPrompt()
});
