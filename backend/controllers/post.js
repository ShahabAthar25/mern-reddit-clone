const Post = require("../models/Post");
const SubReddit = require("../models/SubReddit");
const { postValidation } = require("../utils/validation");

const getRecommendation = async (req, res) => {
  try {
    // Getting all posts
    const posts = await Post.find();

    res.json(posts);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getPost = async (req, res) => {
  try {
    // Getting post
    const post = await Post.findById(req.params.id);

    res.json(post);
  } catch (error) {
    res.sendStatus(500);
  }
};

const createPost = async (req, res) => {
  try {
    // Validating Request
    const { error } = postValidation(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    const subReddit = await SubReddit.findById(req.params.id);

    const newPost = new Post({
      title: req.body.title,
      body: req.body.body,
      image: req.body.image,
      owner: req.user.username,
      ownerId: req.user._id,
      subReddit: subReddit._id,
      subRedditPic: subReddit.pic,
    });

    const post = await newPost.save();
    res.json(post);
  } catch (error) {
    res.sendStatus(500);
  }
};

const updatePost = async (req, res) => {
  res.json("Hello World");
};

const deletePost = async (req, res) => {
  res.json("Hello World");
};

const likePost = async (req, res) => {
  res.json("Hello World");
};

const dislikePost = async (req, res) => {
  res.json("Hello World");
};

module.exports = {
  getRecommendation,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  dislikePost,
};
