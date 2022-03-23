var express = require("express");
var router = express.Router();
var hobbiesController = require("../controllers/hobbies");
router.get("/", hobbiesController.getHobbies);
router.post("/", hobbiesController.createHobby);
router.delete("/:id", hobbiesController.deleteHobby);
module.exports = router;
