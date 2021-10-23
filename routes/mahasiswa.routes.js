const router = require("express").Router();
const controllers = require("../controllers/index");

module.exports = (app) => {
	router.get("/", controllers.mahasiswa.getAll);
	router.post("/", controllers.mahasiswa.create);

	app.use("/api/v1/mahasiswa", router);
};
