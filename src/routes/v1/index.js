const express = require("express");
const cityController = require("../../controllers/city-controller");
const airportController = require("../../controllers/airport-controller");
const flightController = require("../../controllers/flight-controller");

const router = express.Router();

// function logRequestBody(req, res, next) {
//   console.log("REQ ID:", req.body); // undefind
//   next(); // important!
// }

// all routes belong to city repository
router.post("/city", cityController.create);
router.post("/cities", cityController.createAll);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAll);
router.patch("/city/:id", cityController.update);
router.delete("/city/:id", cityController.destroy);


// all routes belong to Airport repository
router.post("/airport", airportController.create);
router.post("/airports", airportController.createAll);
router.get("/airport/:id", airportController.get);
router.get("/airport", airportController.getAll);
router.patch("/airport/:id", airportController.update);
router.delete("/airport/:id", airportController.destroy);
router.get("/:cityName", airportController.getCityAirports);



router.post("/flights", flightController.create);


module.exports = router;
