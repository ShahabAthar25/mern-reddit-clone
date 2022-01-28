const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");

const authController = require("./routes/auth");
const subRedditController = require("./routes/subReddit");
const postController = require("./routes/post");
const commentController = require("./routes/comment");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, () => {
  console.log(`Connected to database`);
});

app.use(express.json({ limit: "50kb" }));
app.use(express.urlencoded({ limit: "50kb", extended: true }));
app.use(morgan("common"));
app.use(helmet());
app.use(cors());

app.use("/api/auth", authController);
app.use("/api/subreddit", subRedditController);
app.use("/api/posts", postController);
app.use("/api/comments", commentController);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
