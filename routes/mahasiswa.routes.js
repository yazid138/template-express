const router = require("express").Router();
const controllers = require("../controllers/index");

module.exports = (app) => {
	router.get("/", controllers.mahasiswa.getAll);

	app.use("/api/v1/mahasiswa", router);
};
