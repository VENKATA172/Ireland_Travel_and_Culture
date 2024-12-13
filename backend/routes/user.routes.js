module.exports = app => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();
  
    router.get("/destinations", user.getDestinations);
    router.get("/events", user.getEvents);
    router.get("/accommodations", user.getAccommodations);
    router.get("/travel-tips", user.getTravelTips);
  
    app.use('/api/user', router);
  };
