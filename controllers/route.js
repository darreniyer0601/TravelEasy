const { db } = require('../util/db');

exports.addRoute = (req, res) => {
    const { origin, destination } = req.body;

    try {
        const sql = `insert into route (origin, destination) values (${origin},${destination})`;

        db.query(sql, (err, result) => {
            if (err) throw err;

            res.status(200).json({ msg: 'Route added' });
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}

exports.getLastRoute = (req, res) => {
    try {
        const sql = 'select id from route where id = (select max(id) from route);'

        db.query(sql, (err, result) => {
            if (err) throw err;

            res.status(200).json({ result: result[0] });
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}