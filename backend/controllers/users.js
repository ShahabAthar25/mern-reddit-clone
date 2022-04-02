const Post = require("../models/Post");

const whoami = (req, res) => {
  res.json({
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    profilePic: req.user.profilePic,
    likedPost: req.user.likedPosts,
    karma: req.user.karma,
  });
};

const getUserPosts = async (req, res) => {
  const posts = await Post.find({ ownerId: req.params.id });

  res.json(posts);
};

const getUserProfile = async (req, res) => {
  const posts = await Post.find({ ownerId: req.params.id });

  res.json(posts);
};

module.exports = {
  whoami,
  getUserPosts,
  getUserProfile,
};
