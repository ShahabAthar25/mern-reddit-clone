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
      const updatedSubReddit = await SubReddit.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        }
      );

      res.json(updatedSubReddit);
    } else {
      return res.sendStatus(403);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

const deleteSubReddit = (req, res) => {
  res.json("Hello");
};

const joinSubReddit = (req, res) => {
  res.json("Hello");
};

const addMod = (req, res) => {
  res.json("Hello");
};

const addRule = (req, res) => {
  res.json("Hello");
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
