const SubReddit = require("../models/SubReddit");

const detail = (req, res) => {
  res.send({ message: "you are authenticated" });
};

module.exports = {
  detail,
};
