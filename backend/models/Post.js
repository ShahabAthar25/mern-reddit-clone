const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    default: "",
  },
  owner: {
    type: String,
    require: true,
  },
  ownerId: {
    type: String,
    require: true,
  },
  subReddit: {
    type: String,
    require: true,
  },
  subRedditId: {
    type: String,
    require: true,
  },
  subRedditPic: {
    type: String,
    require: true,
  },
  likes: {
    type: Array,
    default: [],
  },
  disLikes: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Post", postSchema);
