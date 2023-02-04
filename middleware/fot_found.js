const notFound = (req, res, next) => {
  res.send("it seems that you are lost!");
};

module.exports = notFound;
