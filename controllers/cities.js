const { db } = require('../util/db');

exports.getCities = (req, res) => {
    const sql = 'select * from cities';
    
    try {
        db.query(sql, (err, result) => {
            if (err) throw err;
            // console.log(result);
    
            res.status(200).json({ cities: result });
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }
}