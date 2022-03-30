const jwt = require("jsonwebtoken");

module.exports = (payload) => {
  // genrating a jwt
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
};
