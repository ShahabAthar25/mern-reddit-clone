const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    min: 3,
    max: 60,
  },
  body: String,
  photo: {
    type: String,
    default: [],
  },
  subredditName: {
    type: String,
    require: true,
    min: 3,
    max: 60,
  },
  subredditId: {
    type: String,
    require: true,
    min: 3,
    max: 60,
  },
  username: {
    type: String,
    require: true,
    min: 3,
    max: 60,
  },
  userId: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Post", PostSchema);
