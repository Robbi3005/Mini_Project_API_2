const mysql = require('mysql');

const db = mysql.createConnection ({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'merchant_services_2'
})

module.exports = db;