const { db } = require('../util/db');

exports.getVehicles = (req, res) => {
    try {
        const sql = 'select * from vehicles';

        db.query(sql, (err, result) => {
            if (err) throw err;

            res.status(200).json({ vehicles: result });
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}