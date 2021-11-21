const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const { registerValidation, loginValidation } = require("../utils/validation");

const register = async (req, res) => {
  // Validating Request
  const { errors } = registerValidation(req.body);
  if (errors) {
    res.status(500).send({ message: errors });
  }

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
  const { errors } = loginValidation(req.body);
  if (errors) return res.status(400).send({ message: errors });

  // checking if email is correct
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send({ message: "Wrong credentials" });

  // checking if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(404).send({ message: "Wrong credentials" });

  const token = jwt.sign(
    { _id: user.id, username: user.username },
    process.env.SECRET_KEY,
    {
      expiresIn: "1d",
    }
  );
  res.header("Authorization", token).send({ message: token });
};

module.exports = {
  register,
  login,
};
