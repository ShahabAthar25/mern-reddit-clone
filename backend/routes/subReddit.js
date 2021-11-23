const router = require("express").Router();

const controller = require("../controllers/subRedditController");
const isAuthenticated = require("../utils/check-auth");

router.post("/", isAuthenticated, controller.createSubReddit);
router.get("/:id", isAuthenticated, controller.detail);
router.put("/:id", isAuthenticated, controller.updateSubReddit);
router.delete("/:id", isAuthenticated, controller.deleteSubReddit);
router.put("/join/:id", isAuthenticated, controller.join);

module.exports = router;
