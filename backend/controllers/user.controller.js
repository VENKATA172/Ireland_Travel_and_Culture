const db = require("../models");
const Destination = db.Destination;
const Event = db.Event;
const Accommodation = db.Accommodation;
const TravelTip = db.TravelTip;
const Op = db.Sequelize.Op;

exports.getDestinations = (req, res) => {
  Destination.findAll()
    .then(destinations => {
      res.send(destinations);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getEvents = (req, res) => {
  Event.findAll()
    .then(events => {
      res.send(events);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getAccommodations = (req, res) => {
  Accommodation.findAll()
    .then(accommodations => {
      res.send(accommodations);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getTravelTips = (req, res) => {
  TravelTip.findAll()
    .then(travelTips => {
      res.send(travelTips);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
