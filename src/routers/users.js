const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

/* GET users listing. */
router.get("/", userController.getProfile);

module.exports = router;
