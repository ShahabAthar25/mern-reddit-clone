const Post = require("../models/Post");

const myPosts = async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.user._id });
    res.send(posts);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const subredditPosts = async (req, res) => {
  try {
    const posts = await Post.find({ subreddit: req.params.id });
    res.send(posts);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const userPosts = async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.id });
    res.send(posts);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports = {
  myPosts,
  subredditPosts,
  userPosts,
};
