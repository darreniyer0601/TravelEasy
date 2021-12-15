const { db } = require('../util/db');

exports.getHotels = (req, res) => {
    const sql = 'select * from hotels';
    
    try {
        db.query(sql, (err, result) => {
            if (err) throw err;
            // console.log(result);
    
            res.status(200).json({ hotels: result });
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }
}