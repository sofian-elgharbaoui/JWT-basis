const errorsHandler = (err, req, res, next) => {
  res.status(500).json({ status: "failure", msg: "Something broke!" });
};

module.exports = errorsHandler;
