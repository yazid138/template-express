const model = require("../models/index");

const controller = {};

controller.getAll = async (req, res) => {
	try {
		await model.mahasiswa.findAll().then((result) => {
			if (result.length > 0) {
				res.json({
					message: "get method mahasiswa",
					data: result,
				});
			} else {
				res.status(404).json({
					message: "tidak ada data",
					data: [],
				});
			}
		});
	} catch (err) {
		res.status(400).json({
			message: err,
		});
	}
};

module.exports = controller;
