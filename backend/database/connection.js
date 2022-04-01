const mysql = require('mysql2');

const db = mysql.createPool({
    host: "Your-host",
    user: "Your-username",
    password: "Your-password",
    database: "Your-database-name"
})

module.exports = db
