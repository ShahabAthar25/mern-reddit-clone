const mongoose = require("mongoose");

const subRedditSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  owner: {
    type: String,
    require: true,
  },
  ownerId: {
    type: String,
    require: true,
  },
  pic: {
    type: String,
    default: "",
  },
  bannerPic: {
    type: String,
    default: "",
  },
  members: {
    type: Array,
    default: [],
  },
  mods: {
    type: Array,
    default: [],
  },
  rules: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("SubReddit", subRedditSchema);
