const Post = require("../models/Post");
const { postValidation } = require("../utils/validation");

const index = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const detail = async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id);
    res.send(posts);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const userPosts = async (req, res) => {
  res.send(req.user);
};

const createPost = async (req, res) => {
  const { error } = postValidation(req.body);
  if (error) res.status(400).send({ message: error });

  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    photo: req.body.photo,
    subreddit: req.body.subreddit,
    username: req.user.username,
    userId: req.user._id,
  });

  try {
    const post = await newPost.save();
    res.send(post);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updatePost = (req, res) => {
  res.send({ message: "Function" });
};

const deletePost = (req, res) => {
  res.send({ message: "Function" });
};

module.exports = {
  index,
  detail,
  createPost,
  updatePost,
  deletePost,
  userPosts,
};
