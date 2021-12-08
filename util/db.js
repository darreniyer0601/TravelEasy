const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cs348'
});

const connect = () => {
    return new Promise((resolve, reject) => {
        db.connect((err) => {
            if (err) {
                reject(err);
            }
            resolve();
        })
    })
}

module.exports = {
    db,
    connect
}