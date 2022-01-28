const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  body: {
    type: String,
    require: true,
  },
  postId: {
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
  ownerPic: {
    type: String,
    require: true,
  },
  upVotes: {
    type: Array,
    default: [],
  },
  downVotes: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Comment", commentSchema);
