const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");

const authRoute = require("./routes/auth");
const subRedditRoute = require("./routes/subReddit");
const postRoute = require("./routes/post");
const usersRoute = require("./routes/users");

dotenv.config();

app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB, () => {
  console.log("Connected to Database");
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Routes
app.use("/api/auth/", authRoute);
app.use("/api/r/", subRedditRoute);
app.use("/api/posts/", postRoute);
app.use("/api/users/", usersRoute);

// Starting server
app.listen(PORT, () => {
  console.log(`Server stated on http://localhost:${PORT}`);
});
