const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    min: 3,
    max: 60,
  },
  email: {
    type: String,
    require: true,
    min: 3,
    max: 100,
  },
  password: {
    type: String,
    require: true,
    min: 8,
  },
  profilePic: {
    type: String,
    default: "",
  },
  joinedSubReddits: {
    type: Array,
    default: [],
  },
  likedPosts: {
    type: Array,
    default: [],
  },
  karma: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
