const SubReddit = require("../models/SubReddit");
const Post = require("../models/Post");
const User = require("../models/User");
const { subRedditValidation } = require("../utils/validation");

const detail = (req, res) => {
  res.send({ message: "you are authenticated" });
};

const createSubReddit = async (req, res) => {
  const { error } = subRedditValidation(req.body);
  if (error) return res.status(400).send({ message: error });

  const newSubReddit = new SubReddit({
    subRedditName: req.body.subRedditName,
    ownerName: req.user.username,
    ownerId: req.user._id,
  });

  try {
    const subreddit = await newSubReddit.save();
    res.send(subreddit);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const updateSubReddit = async (req, res) => {
  const subreddit = await SubReddit.findById(req.params.id);

  if (req.user._id === subreddit.ownerId) {
    try {
      const updatedSubreddit = await SubReddit.updateOne({
        $set: req.body,
      });
      res.status(200).send({ message: "SubReddit has been updated" });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  } else {
    return res.status(403).send({
      message: "You do not have the permission for updating this subreddit",
    });
  }
};

const deleteSubReddit = async (req, res) => {
  const subreddit = await SubReddit.findById(req.params.id);

  try {
    if (req.user._id === subreddit.ownerId) {
      try {
        const deletedPosts = await Post.deleteMany({
          subreddit: req.params.id,
        });
        const deletedSubreddit = await SubReddit.findByIdAndDelete(
          req.params.id
        );
        res.status(200).send({ message: "SubReddit has been deleted" });
      } catch (err) {
        return res.status(500).send({ message: err });
      }
    } else {
      return res.status(403).send({
        message: "You do not have the permission for deleting this subreddit",
      });
    }
  } catch (err) {
    res.status(404).send({ message: "Subreddit not found" });
  }
};

const join = async (req, res) => {
  try {
    const subreddit = await SubReddit.findById(req.params.id);
    const currentUser = await User.findById(req.user._id);

    const exist = await SubReddit.findOne({ members: req.user._id });
    if (exist) {
      const members = await subreddit.updateOne({
        $pull: { members: req.user._id },
      });
      const memberOf = await currentUser.updateOne({
        $pull: { memberOf: req.params.id },
      });

      return res.status(200).send({ message: "You have left the subreddit" });
    }

    const members = await subreddit.updateOne({
      $push: { members: req.user._id },
    });
    const memberOf = await currentUser.updateOne({
      $push: { memberOf: req.params.id },
    });
    res.status(200).send({ message: "you have joined this reddit" });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  detail,
  createSubReddit,
  updateSubReddit,
  deleteSubReddit,
  join,
};
