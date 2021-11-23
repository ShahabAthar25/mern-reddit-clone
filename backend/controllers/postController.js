const Post = require("../models/Post");
const SubReddit = require("../models/SubReddit");
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

const createPost = async (req, res) => {
  const { error } = postValidation(req.body);
  if (error) return res.status(400).send({ message: error });

  const subreddit = await SubReddit.findById(req.body.subredditId);
  if (!subreddit) {
    return res.status(404).send({ message: "SubReddit not found" });
  }

  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    photo: req.body.photo,
    subredditName: subreddit.subRedditName,
    subredditId: req.body.subredditId,
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

const updatePost = async (req, res) => {
  if (
    req.body.username ||
    req.body.userId ||
    req.body.subredditName ||
    req.body.subredditId ||
    req.body._id ||
    req.body.title
  ) {
    return res.status(403).send({ message: "you cannot access these fields" });
  }

  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.user._id) {
      await post.updateOne({ $set: req.body });
      res.status(200).send({ message: "the post has been updated" });
    } else {
      res.status(403).send({ message: "you can update only your post" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  try {
    if (req.user._id === post.userId) {
      try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Post has been deleted" });
      } catch (err) {
        return res.status(500).send({ message: err });
      }
    } else {
      return res.status(403).send({
        message: "You do not have the permission for deleting this post",
      });
    }
  } catch (err) {
    res.status(404).send({ message: "Subreddit not found" });
  }
};

module.exports = {
  index,
  detail,
  createPost,
  updatePost,
  deletePost,
};
