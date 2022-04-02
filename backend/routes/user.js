const router = require("express").Router();

const controller = require("../controllers/users");
const authorization = require("../middlewares/authorization");

router.get("/me", authorization, controller.whoami);
router.get("/posts/:id", authorization, controller.getUserPosts);
router.get("/profile/:id", authorization, controller.getUserProfile);

module.exports = router;
