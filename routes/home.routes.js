const router = require("express").Router();

module.exports = (app) => {
	router.get("/", (req, res) => {
		res.json({
			message: "Welcome to Express",
		});
	});

	app.use("/", router);
};
