const SubReddit = require("../models/SubReddit");
const { subRedditValidation } = require("../utils/validation");

const getSubReddit = async (req, res) => {
  try {
    // Getting all subreddits
    const subReddits = await SubReddit.find({});

    res.json(subReddits);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getSubRedditById = async (req, res) => {
  try {
    // Getting one subreddit by id
    const subReddit = await SubReddit.findById(req.params.id);

    res.json(subReddit);
  } catch (error) {
    res.sendStatus(500);
  }
};

const createSubReddit = async (req, res) => {
  try {
    // Validating Request
    const { error } = subRedditValidation(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    // Creating new subreddit
    const newSubReddit = new SubReddit({
      name: req.body.name,
      owner: req.user.username,
      ownerId: req.user._id,
    });

    // Saving subreddit to database
    const subReddit = await newSubReddit.save();
    res.json(subReddit);
  } catch (error) {
    res.sendStatus(500);
  }
};

const updateSubReddit = async (req, res) => {
  try {
    // finding the subreddit to update
    const subReddit = await SubReddit.findById(req.params.id);

    // if user is not the owner of the subreddit then denying permission
    if (req.user._id === subReddit.ownerId) {
      // updating the subreddit
      const updatedSubReddit = await subReddit.updateOne({
        $set: req.body,
      });

      res.json("SubReddit has been updated");
    } else {
      return res.sendStatus(403);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

const deleteSubReddit = async (req, res) => {
  try {
    // getting the subreddit
    const subReddit = await SubReddit.findById(req.params.id);

    // checking if the user is the creator of the subreddit
    if (subReddit.ownerId === req.user._id) {
      // deleting the subreddit
      const deletedSubReddit = await subReddit.deleteOne();

      res.json("Subreddit has been deleted");
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

const joinSubReddit = async (req, res) => {
  try {
    // getting the subreddit
    const subReddit = await SubReddit.findById(req.params.id);

    // checking if the user has already joined the subreddit
    if (!subReddit.members.includes(req.user._id)) {
      // adding user id to members array
      const joinedUser = await subReddit.updateOne({
        $push: { members: req.user._id },
      });

      res.json(`Joined r/${subReddit.name}`);
    } else {
      // removing user id from members array
      const leftUser = await subReddit.updateOne({
        $pull: { members: req.user._id },
      });

      res.json(`Left r/${subReddit.name}`);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

const addMod = async (req, res) => {
  try {
    // getting the subreddit
    const subReddit = await SubReddit.findById(req.params.id);

    // Checking if the user is the owner
    if (subReddit.ownerId === req.user._id) {
      // checking if the user is already a mod
      if (!subReddit.mods.includes(req.body.modId)) {
        // adding user id to mods array
        const addedMod = await subReddit.updateOne({
          $push: { mods: req.body.modId },
        });

        res.json(`Added Mod ${req.body.modId}`);
      } else {
        // removing user id from mods array
        const removedMod = await subReddit.updateOne({
          $pull: { mods: req.body.modId },
        });

        res.json(`Removed mod ${req.body.modId}`);
      }
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

const addRule = async (req, res) => {
  try {
    // getting the subreddit
    const subReddit = await SubReddit.findById(req.params.id);

    // Checking if the user is the owner or a mod
    if (
      subReddit.ownerId === req.user._id ||
      subReddit.mods.includes(req.body.modId)
    ) {
      // checking if the user is already a mod
      if (!subReddit.rules.includes(req.body.rule)) {
        // adding rule to rule array
        const addedRule = await subReddit.updateOne({
          $push: { rules: req.body.rule },
        });

        res.json(`Added Rule ${req.body.rule}`);
      } else {
        // removing rule from rules array
        const removedRule = await subReddit.updateOne({
          $pull: { rules: req.body.rule },
        });

        res.json(`Removed Rule ${req.body.rule}`);
      }
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  getSubReddit,
  getSubRedditById,
  createSubReddit,
  updateSubReddit,
  deleteSubReddit,
  joinSubReddit,
  addMod,
  addRule,
};
