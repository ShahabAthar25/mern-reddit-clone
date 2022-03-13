const router = require("express").Router();

const controller = require("../controllers/auth");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/refresh", controller.refresh);
router.delete("/logout", controller.logout);

module.exports = router;
