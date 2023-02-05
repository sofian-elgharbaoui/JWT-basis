const { BadRequestErr } = require("../errors/errorsIndex");
const { StatusCodes } = require("http-status-codes");

const errorsHandler = (err, req, res, next) => {
  if (err instanceof BadRequestErr) {
    res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Something broke!");
};

module.exports = errorsHandler;
