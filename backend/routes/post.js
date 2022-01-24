const router = require("express").Router();

const controller = require("../controllers/post");
const authorization = require("../middlewares/authorization");

router.get("/recommendations", authorization, controller.getRecommendation);
router.get("/:id", controller.getPost);
router.post("/:id", authorization, controller.createPost);
router.put("/:id", authorization, controller.updatePost);
router.delete("/:id", authorization, controller.deletePost);
router.put("/like/:id", authorization, controller.upvotePost);
router.put("/dislike/:id", authorization, controller.downvotePost);

module.exports = router;
