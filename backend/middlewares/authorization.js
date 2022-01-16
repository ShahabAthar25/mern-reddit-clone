const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send({ message: "Access denied" });

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verified;
  } catch (err) {
    res.status(400).send({ message: "Invalid token" });
  }
  next();
};
