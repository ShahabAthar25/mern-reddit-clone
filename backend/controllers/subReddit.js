const SubReddit = require("../models/SubReddit");
const { subRedditValidation } = require("../utils/validation");

const getSubReddit = async (req, res) => {
  try {
    const subReddits = await SubReddit.find({});

    res.json(subReddits);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getSubRedditById = (req, res) => {
  res.json("Hello");
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

    const subReddit = await newSubReddit.save();
    res.json(subReddit);
  } catch (error) {
    res.sendStatus(500);
  }
};

const updateSubReddit = (req, res) => {
  res.json("Hello");
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
