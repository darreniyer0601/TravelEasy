const { db } = require("../util/db");

exports.getItenaries = (req, res) => {
	try {
		db.query(
			"SET TRANSACTION ISOLATION LEVEL READ COMMITTED;",
			(err, result) => {
				if (err) throw err;

				db.beginTransaction();

				const sql =
					"select i.id, i.user_id, h.name as hotel, c1.name as origin, c2.name as destination, v.type as vehicle, i.days, i.price from itenaries i, hotels h, vehicle_route vr, vehicles v, route r, cities c1, cities c2 where i.hotel = h.id and i.route = vr.id and vr.vehicle_id = v.id and vr.route_id = r.id and r.origin = c1.id and r.destination = c2.id;";

				db.query(sql, (err, result) => {
					if (err) throw err;

					db.commit();

					res.status(200).json({ itenaries: result });
				});
			}
		);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
};

exports.getItenariesByPrice = (req, res) => {
	const min_price = req.params.min_price;
	const max_price = req.params.max_price;

	try {
		db.query(
			"SET TRANSACTION ISOLATION LEVEL READ COMMITTED;",
			(err, result) => {
				if (err) throw err;

				db.beginTransaction();

				const sql =
					"select i.id, i.user_id, h.name as hotel, c1.name as origin, c2.name as destination, v.type as vehicle, i.days, i.price from itenaries i, hotels h, vehicle_route vr, vehicles v, route r, cities c1, cities c2 where i.hotel = h.id and i.route = vr.id and vr.vehicle_id = v.id and vr.route_id = r.id and r.origin = c1.id and r.destination = c2.id and i.price >= " + db.escape(min_price) + " and i.price <= " + db.escape(max_price) + ";";

				db.query(sql, (err, result) => {
					if (err) throw err;

					db.commit();

					res.status(200).json({ itenaries: result });
				});
			}
		);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
};

exports.getItenariesByDestination = (req, res) => {
	const destination = req.params.id;

	try {
		db.query(
			"SET TRANSACTION ISOLATION LEVEL READ COMMITTED;",
			(err, result) => {
				if (err) throw err;

				db.beginTransaction();

				const sql =
					"select i.id, i.user_id, h.name as hotel, c1.name as origin, c2.name as destination, v.type as vehicle, i.days, i.price from itenaries i, hotels h, vehicle_route vr, vehicles v, route r, cities c1, cities c2 where i.hotel = h.id and i.route = vr.id and vr.vehicle_id = v.id and vr.route_id = r.id and r.origin = c1.id and r.destination = c2.id and r.destination = " + db.escape(destination) + ";"

				db.query(sql, (err, result) => {
					if (err) throw err;

					db.commit();

					res.status(200).json({ itenaries: result });
				});
			}
		);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
};

exports.addItenary = (req, res) => {
	const { days, hotel, route, price, user_id } = req.body;

	try {
		db.query("SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;", (err, result) => {
			if (err) throw err;

			db.beginTransaction();

			let sql =
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

				sql =
					"select i.id, i.user_id, h.name as hotel, c1.name as origin, c2.name as destination, v.type as vehicle, i.days, i.price from itenaries i, hotels h, vehicle_route vr, vehicles v, route r, cities c1, cities c2 where i.hotel = h.id and i.route = vr.id and vr.vehicle_id = v.id and vr.route_id = r.id and r.origin = c1.id and r.destination = c2.id and i.id = (select max(id) from itenaries);";

				db.query(sql, (err, result) => {
					if (err) throw err;

					db.commit();

					res.status(200).json({ itenary: result[0] });
				})
			});
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
};

exports.deleteItenary = (req, res) => {
	const id = req.params.id;

	try {
		const sql = "delete from itenaries where id = " + db.escape(id);

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
