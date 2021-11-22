const router = require("express").Router();

const controller = require("../controllers/postController");
const isAuthenticated = require("../utils/check-auth");

router.get("/", controller.index);
router.get("/:id", controller.detail);
router.get("/me", isAuthenticated, controller.userPosts);
router.post("/", isAuthenticated, controller.createPost);
router.put("/:id", isAuthenticated, controller.updatePost);
router.delete("/:id", isAuthenticated, controller.deletePost);

module.exports = router;
