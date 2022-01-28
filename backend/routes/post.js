const router = require("express").Router();

const controller = require("../controllers/post");
const authorization = require("../middlewares/authorization");

router.get("/recommendations", authorization, controller.getRecommendation);
router.get("/:id", controller.getPost);
router.post("/:id", authorization, controller.createPost);
router.put("/:id", authorization, controller.updatePost);
router.delete("/:id", authorization, controller.deletePost);
router.put("/upvote/:id", authorization, controller.upvotePost);
router.put("/downvote/:id", authorization, controller.downvotePost);

module.exports = router;
