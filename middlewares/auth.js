const jwt = require("jsonwebtoken");
const { UnauthenticatedErr } = require("../errors/errorsIndex");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedErr("please, try again later.");
  }

  let token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    let { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedErr("Not authorized to access this route");
  }
};

module.exports = authenticationMiddleware;
