const express = require("express");
const cityController = require("../../controllers/city-controller");

const router = express.Router();
function logRequestBody(req, res, next) {
  // console.log("REQ ID:", req.params.id); // undefind
  next(); // important!
}

router.delete("/city/:id", logRequestBody, cityController.destroy);
router.post("/city", logRequestBody, cityController.create);
router.patch("/city/:id", logRequestBody, cityController.update);
router.get("/city/:id", logRequestBody, cityController.get);
router.get("/city", logRequestBody, cityController.getAll);

module.exports = router;