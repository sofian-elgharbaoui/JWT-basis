require("dotenv").config();
const jwt = require("jsonwebtoken");
const { BadRequestErr } = require("../errors/errorsIndex");

const login = async (req, res) => {
  let { usernameValue: username, passwordValue: password } = req.body;
  if (!username || !password) {
    throw new BadRequestErr("please, provide valide username and password");
  }

  let id = new Date();
  id = id.getDate();

  const token = jwt.sign({ id, username, password }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  res
    .status(200)
    .json({ msg: "Congratulation, you have signed successfully.", token });
};

const getItems = async (req, res) => {
  let { username } = req.user;
  let luckyNum = Math.floor(Math.random() * 10);
  res.status(200).json({
    msg: `hello, ${username}`,
    secret: `Now you have the abilty to use this route.
    your lucky number is ${luckyNum}`,
  });
};

module.exports = { login, getItems };
