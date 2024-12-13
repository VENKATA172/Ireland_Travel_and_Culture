const admin = require("../controllers/admin.controller.js");
const { verifyToken, isAdmin } = require("../middleware/authJwt");
var router = require("express").Router();

router.get("/users", verifyToken, isAdmin, admin.getAllUsers);
router.put("/users/:id/approve", verifyToken, isAdmin, admin.approveUser);
router.put("/users/:id/deny", verifyToken, isAdmin, admin.denyUser);
router.put("/users/:id/suspend", verifyToken, isAdmin, admin.suspendUser);
router.post("/events", verifyToken, isAdmin, admin.createEvent);
router.put("/events/:id", verifyToken, isAdmin, admin.updateEvent);
router.delete("/events/:id", verifyToken, isAdmin, admin.deleteEvent);
router.post("/travel-tips", verifyToken, isAdmin, admin.createTravelTip);
router.put("/travel-tips/:id", verifyToken, isAdmin, admin.updateTravelTip);
router.delete("/travel-tips/:id", verifyToken, isAdmin, admin.deleteTravelTip);
router.post("/destinations", verifyToken, isAdmin, admin.createDestination);
router.put("/destinations/:id", verifyToken, isAdmin, admin.updateDestination);
router.delete("/destinations/:id", verifyToken, isAdmin, admin.deleteDestination);

module.exports = app => {
  app.use('/api/admin', router);
};
