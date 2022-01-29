const Comment = require("../models/Comment");
const User = require("../models/User");
const { commentValidation } = require("../utils/validation");

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
    const { error } = commentValidation(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    const user = await User.findById(req.user._id);

    const newComment = new Comment({
      body: req.body.body,
      postId: req.body.postId,
      owner: req.user.username,
      ownerId: req.user._id,
      ownerPic: user.profilePic,
    });

    const comment = await newComment.save();
    res.json(comment);
  } catch (error) {
    res.sendStatus(500);
  }
};
const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (req.user._id === comment.ownerId) {
      const updatedComment = await comment.updateOne({
        $set: req.body,
      });

      res.json("comment updated");
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.send(error);
    console.log(error);
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
