const appConnection = require('./connection');

// create a class
class Database {
    constructor(appConnection) {
        this.appConnection = appConnection;
    }

    findAllEmployees() {
        return this.appConnection.query(
            'SELECT * FROM employee.employees');
    }
}

// export the code
module.exports = new Database(appConnection);