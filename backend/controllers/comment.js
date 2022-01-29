const Comment = require("../models/Comment");

const comments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.id });

    res.json(comments);
  } catch (error) {
    res.sendStatus(500);
  }
};
const createComment = async (req, res) => {
  try {
    res.json("Hello World");
  } catch (error) {
    res.sendStatus(500);
  }
};
const updateComment = async (req, res) => {
  try {
    res.json("Hello World");
  } catch (error) {
    res.sendStatus(500);
  }
};
const deleteComment = async (req, res) => {
  try {
    res.json("Hello World");
  } catch (error) {
    res.sendStatus(500);
  }
};
const upvoteComment = async (req, res) => {
  try {
    res.json("Hello World");
  } catch (error) {
    res.sendStatus(500);
  }
};
const downvoteComment = async (req, res) => {
  try {
    res.json("Hello World");
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  comments,
  createComment,
  updateComment,
  deleteComment,
  upvoteComment,
  downvoteComment,
};
