const { db } = require("../util/db");

exports.getItenaries = (req, res) => {
	try {
		const sql = "select * from itenaries";
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
};

exports.addItenary = (req, res) => {
	const { days, hotel, route, price, user_id } = req.body;

	try {
		const sql =
			"insert into itenaries (days, hotel, route, price, user_id) values (" +
			db.escape(days) +
			"," +
			db.escape(hotel) +
			"," +
			db.escape(route) +
			"," +
			db.escape(price) +
			"," +
			db.escape(user_id) +
			");";

		db.query(sql, (err, result) => {
			if (err) throw err;

			res.status(200).json({ msg: "Itenary added" });
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
};

exports.deleteItenary = (req, res) => {
	const id = req.params.id;

	try {
		const sql = 'delete from itenaries where id = ' + db.escape(id);

		db.query(sql, (err, result) => {
			if (err) throw err;

			res.status(200).json({ msg: "Itenary deleted" });
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
};

exports.addVehicleRoute = (req, res) => {
	const { vehicle_id, route_id, travel_time } = req.body;

	try {
		db.query("SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;", (err, result) => {
			if (err) throw err;

			db.beginTransaction();

			let sql =
				"insert into vehicle_route (vehicle_id, route_id, travel_time) value (" +
				db.escape(vehicle_id) +
				"," +
				db.escape(route_id) +
				"," +
				db.escape(travel_time) +
				");";

			db.query(sql, (err, result) => {
				if (err) throw err;

				sql =
					"select * from vehicle_route where id = (select max(id) from vehicle_route)";

				db.query(sql, (err, result) => {
					if (err) throw err;

					db.commit();

					res.status(200).json({ result: result[0] });
				});
			});
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
};
