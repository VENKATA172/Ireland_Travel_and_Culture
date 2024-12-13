const auth = require("../controllers/auth.controller.js");
const { verifyToken } = require("../middleware/authJwt");
var router = require("express").Router();

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/role", verifyToken, auth.getRole); // Add verifyToken middleware

module.exports = app => {
  app.use('/api/auth', router);
};
