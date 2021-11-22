const mongoose = require("mongoose");

const SubRedditSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 3,
    max: 60,
  },
  ownerId: {
    type: String,
    require: true,
    min: 3,
    max: 60,
  },
  ownerName: {
    type: String,
    require: true,
    min: 3,
    max: 60,
  },
  coverPic: {
    type: String,
    default: "",
  },
  banner: {
    type: String,
    default: "",
  },
  members: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("SubReddit", SubRedditSchema);
