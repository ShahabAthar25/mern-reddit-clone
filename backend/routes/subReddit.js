const router = require("express").Router();

const controller = require("../controllers/subRedditController");
const isAuthenticated = require("../utils/check-auth");

router.get("/", isAuthenticated, controller.detail);

module.exports = router;
