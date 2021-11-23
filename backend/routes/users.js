const router = require("express").Router();

const isAuthenticated = require("../utils/check-auth");
const controller = require("../controllers/usersController");

router.get("/me/posts", isAuthenticated, controller.myPosts);
router.get("/:id/posts/subreddit", controller.subredditPosts);
router.get("/:id/posts/user", controller.userPosts);

module.exports = router;
