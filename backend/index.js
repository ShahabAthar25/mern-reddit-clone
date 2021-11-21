const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");

dotenv.config();

app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Starting server
app.listen(PORT, () => {
  console.log(`Server stated on http://localhost:${PORT}`);
});
