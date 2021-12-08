const { db } = require('../util/db');

exports.login = async (req, res) => {

}

exports.signup = async (req, res) => {
    const { name, password } = req.body;

    const sql = `insert into users (name, password, role) values ("${name}",${password}, "customer")`;
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ msg: 'Server error' });
        console.log(result);
        res.status(200).json();
    })
}