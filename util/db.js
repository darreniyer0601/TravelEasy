const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: '348',
    user: 'root',        
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