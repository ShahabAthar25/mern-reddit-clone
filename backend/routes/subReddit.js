const router = require("express").Router();

const controller = require("../controllers/subReddit");
const authorization = require("../middlewares/authorization");

router.get("/", controller.getSubReddit);
router.get("/:id", controller.getSubRedditById);
router.post("/", authorization, controller.createSubReddit);
router.put("/:id", authorization, controller.updateSubReddit);
router.delete("/:id", authorization, controller.deleteSubReddit);
router.put("/join/:id", authorization, controller.joinSubReddit);
router.put("/mod/:id", authorization, controller.addMod);
router.put("/rule/:id", authorization, controller.addRule);

module.exports = router;
