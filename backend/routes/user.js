const router = require("express").Router();

const controller = require("../controllers/users");
const authorization = require("../middlewares/authorization");

router.get("/me", authorization, controller.whoami);
router.get("/posts/:id", authorization, controller.getUserPosts);
router.get("/profile/:id", authorization, controller.getUserProfile);
router.put("/", authorization, controller.updateUser);
router.delete("/", authorization, controller.deleteUser);

module.exports = router;
