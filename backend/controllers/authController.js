const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const { registerValidation, loginValidation } = require("../utils/validation");

const register = async (req, res) => {
  // Validating Request
  const { error } = registerValidation(req.body);
  console.log(error);
  if (error) return res.status(400).send({ message: error });

  try {
    // genrate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // creating new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // saving user
    const user = await newUser.save();
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const login = async (req, res) => {
  // Validating Request
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send({ message: error });

  // checking if email is correct
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send({ message: "Wrong credentials" });

  // checking if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(404).send({ message: "Wrong credentials" });

  const token = jwt.sign(
    { _id: user.id, username: user.username },
    process.env.SECRET_KEY
  );
  res
    .cookie("Authorization", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .send({ message: "Logged in successfully" });
};

const logout = (req, res) => {
  try {
    res.clearCookie("Authorization").send({ message: "Logged out" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports = {
  register,
  login,
  logout,
};
