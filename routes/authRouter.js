const express = require("express");
const router = express.Router();

const { login, getItems } = require("../controllers/main");

router.route("/login").post(login);
router.route("/dashboard").post(getItems);

module.exports = router;
