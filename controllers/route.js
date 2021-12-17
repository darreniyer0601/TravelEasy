const { db } = require('../util/db');

exports.addRoute = (req, res) => {
    const { origin, destination } = req.body;

    try {
        db.query("SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;", (err, result) => {
            if (err) throw err;

            db.beginTransaction();

            let sql = 'insert into route (origin, destination) values (' + db.escape(origin) + ',' + db.escape(destination) + ');';
            db.query(sql, (err, result) => {
                if (err) throw err;

                sql = 'select * from route where id = (select max(id) from route);'

                db.query(sql, (err, result) => {
                    if (err) throw err;
                    
                    db.commit();

                    res.status(200).json({ result: result[0] });
                })
            })
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}