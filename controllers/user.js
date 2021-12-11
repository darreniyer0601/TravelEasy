const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { db } = require("../util/db");
require("dotenv").config();

exports.login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const sql = `select * from users where email = "${email}"`;
		db.query(sql, async (err, result) => {
			if (err) throw err;

			if (result.length === 0) {
				return res.status(404).json({ msg: "User does not exist" });
			}

			const user = result[0];

			const passwordsMatch = await bcrypt.compare(password, user.password);

			if (!passwordsMatch) {
				return res.status(401).json({ msg: "Passwords do not match" });
			}

			const payload = {
				user: {
					id: user.id
				},
			};

			jwt.sign(payload, process.env.jwtSecret, (err, token) => {
				if (err) throw err;
				res.status(200).json({ token, user: {
					id: user.id,
					email: user.email,
					name: user.name
				} });
			});
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
};

exports.signup = async (req, res) => {
	const { email, name, password } = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, 8);

		db.query("SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;", (err) => {
			if (err) throw err;

            db.beginTransaction();

			const sql = `insert into users (email, name, password, role) values ("${email}", "${name}","${hashedPassword}", "customer");`;
			db.query(sql, (err, result) => {
				if (err) throw err;

                db.commit();

				res.status(200).json({ msg: "User added" });
			});
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
};
