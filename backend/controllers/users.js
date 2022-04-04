const bcrypt = require("bcrypt");

const { emailValidation, usernameValidation } = require("../utils/validation");
const Post = require("../models/Post");
const User = require("../models/User");

const whoami = (req, res) => {
  res.json({
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    profilePic: req.user.profilePic,
    likedPosts: req.user.likedPosts,
    karma: req.user.karma,
  });
};

const getUserPosts = async (req, res) => {
  const posts = await Post.find({ ownerId: req.params.id });

  res.json(posts);
};

const getUserProfile = async (req, res) => {
  const user = await User.findById(req.params.id);

  res.json({
    _id: user._id,
    username: user.username,
    email: user.email,
    profilePic: user.profilePic,
    likedPost: user.likedPosts,
    karma: user.karma,
  });
};

const updateUser = async (req, res) => {
  try {
    const userExist = await User.findOne({ username: req.body.username });
    if (userExist) return res.status(400).json("Username already exists");

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).json("Email already exists");

    if (req.body.username) {
      const { error } = usernameValidation({ username: req.body.username });
      if (error) return res.status(400).json(error.details[0].message);
    }

    if (req.body.email) {
      console.log("first");
      const { error } = emailValidation({ email: req.body.email });
      if (error) return res.status(400).json(error.details[0].message);
      console.log("first");
    }

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $set: req.body,
    });

    res.json("User updated");
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
};

module.exports = {
  whoami,
  getUserPosts,
  getUserProfile,
  updateUser,
};
