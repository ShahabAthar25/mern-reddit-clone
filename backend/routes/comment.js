const router = require("express").Router();

const controller = require("../controllers/comment");
const authorization = require("../middlewares/authorization");

router.get("/:id", controller.comments);
router.post("/", authorization, controller.createComment);
router.put("/:id", authorization, controller.updateComment);
router.delete("/:id", authorization, controller.deleteComment);
router.put("/upvote/:id", authorization, controller.upvoteComment);
router.put("/downvote/:id", authorization, controller.downvoteComment);

module.exports = router;
