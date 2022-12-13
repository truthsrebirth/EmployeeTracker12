// require the mysql package from package json file
const mysql = require('mysql2');

const appConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PW,
});

// export the function
module.exports = appConnection;