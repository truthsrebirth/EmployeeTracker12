// require the package
const mysql = require('mysql');

const appConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'corporation',
    password: '82Reggie82!',
});

// export the function
module.exports = appConnection;