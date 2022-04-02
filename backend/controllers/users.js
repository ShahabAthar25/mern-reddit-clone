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

module.exports = {
  whoami,
  getUserPosts,
  getUserProfile,
};
