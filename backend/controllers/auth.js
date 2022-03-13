const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { registerValidation, loginValidation } = require("../utils/validation");
const User = require("../models/User");
const RefreshToken = require("../models/RefreshToken");
const generateAccessToken = require("../utils/generateAccessToken");

// Registering a user
const register = async (req, res) => {
  // Validating Request
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  try {
    const userExist = await User.findOne({ username: req.body.username });
    if (userExist) return res.status(400).json("Username already exists");

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).json("Email already exists");

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
    res.json("User registered successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  // Validating Request
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  // checking if email is correct
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json("Invalid email or password");

  // checking if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(404).json("Invalid email or password");

  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
    profilePic: user.profilePic,
    likedPost: user.likedPosts,
    karma: user.karma,
  };

  // creating an access token
  const accessToken = generateAccessToken(payload);

  // creating a refresh token
  const refreshToken = jwt.sign(
    user.toJSON(),
    process.env.REFRESH_TOKEN_SECRET
  );

  const newRefreshToken = RefreshToken({
    refreshToken: refreshToken,
  });

  try {
    await newRefreshToken.save();
  } catch (error) {
    return res.sendStatus(500);
  }

  res.json({
    _id: user._id,
    username: user.username,
    email: user.email,
    profilePic: user.profilePic,
    joinedSubReddits: user.joinedSubReddits,
    karma: user.karma,
    accessToken: accessToken,
    refreshToken: refreshToken,
  });
};

const refresh = async (req, res) => {
  const refreshToken = req.body.token;
  const _refreshToken = await RefreshToken.findOne({
    refreshToken: refreshToken,
  });
  if (refreshToken == null) return res.sendStatus(401);
  if (!_refreshToken) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const payload = {
      _id: user._id,
      username: user.username,
      email: user.email,
      profilePic: user.profilePic,
      likedPost: user.likedPosts,
      karma: user.karma,
    };
    const accessToken = generateAccessToken(payload);
    res.json({ accessToken: accessToken });
  });
};

const logout = async (req, res) => {
  await RefreshToken.findOneAndDelete({ refreshToken: req.body.token });
  res.json("Successfully loggedout");
};

module.exports = {
  register,
  login,
  refresh,
  logout,
};
