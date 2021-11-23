const router = require("express").Router();

const controller = require("../controllers/authController");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/logout", controller.logout);

module.exports = router;
