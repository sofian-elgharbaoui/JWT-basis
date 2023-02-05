const express = require("express");
const router = express.Router();

const { login, getItems } = require("../controllers/main");
const authenticationMiddleware = require("../middlewares/auth");

router.route("/login").post(login);
router.route("/dashboard").get(authenticationMiddleware, getItems);

module.exports = router;
