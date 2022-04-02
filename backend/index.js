const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const subRedditRoute = require("./routes/subReddit");
const postRoute = require("./routes/post");
const commentRoute = require("./routes/comment");
const userRoute = require("./routes/user");

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
app.use(
  cors({
    exposedHeaders: "Authorization",
  })
);

app.use("/api/auth", authRoute);
app.use("/api/subreddit", subRedditRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
