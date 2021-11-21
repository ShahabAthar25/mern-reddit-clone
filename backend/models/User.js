const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
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
    max: 60,
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
  posts: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", UserSchema);
