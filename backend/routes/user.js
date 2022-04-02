const router = require("express").Router();

const controller = require("../controllers/users");
const authorization = require("../middlewares/authorization");

router.get("/me", authorization, controller.whoami);
router.get("/getUserPost/:id", authorization, controller.getUserPosts);

module.exports = router;
