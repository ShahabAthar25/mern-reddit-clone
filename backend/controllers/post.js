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

    // Getting subreddit to get its id, name and pic
    const subReddit = await SubReddit.findById(req.params.id);

    // Creating a post
    const newPost = new Post({
      title: req.body.title,
      body: req.body.body,
      image: req.body.image,
      owner: req.user.username,
      ownerId: req.user._id,
      subReddit: subReddit.name,
      subRedditId: subReddit._id,
      subRedditPic: subReddit.pic,
    });

    // Saving post to database
    const post = await newPost.save();
    res.json(post);
  } catch (error) {
    res.sendStatus(500);
  }
};

const updatePost = async (req, res) => {
  try {
    // finding the subreddit to update
    const post = await Post.findById(req.params.id);

    // getting subreddit to check weather
    const subReddit = await SubReddit.findById(req.params.id);

    // if user is not the owner of the subreddit then denying permission
    if (
      req.user._id === post.ownerId ||
      subReddit.mods.includes(req.body.modId)
    ) {
      // updating the subreddit
      const updatedPost = await post.updateOne({
        $set: req.body,
      });

      res.json("Post has been updated");
    } else {
      return res.sendStatus(403);
    }
  } catch (error) {
    res.sendStatus(500);
  }
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
