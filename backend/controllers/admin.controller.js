const db = require("../models");
const User = db.User;
const Event = db.Event; // Import Event model
const Destination = db.Destination; // Import Destination model
const TravelTip = db.TravelTip; // Import TravelTip model
const Op = db.Sequelize.Op;

exports.getAllUsers = (req, res) => {
  User.findAll({
    where: { role: { [Op.ne]: 'admin' } }
  })
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.approveUser = (req, res) => {
  const userId = req.params.id;
  User.update(
    { status: "approved" },
    { where: { id: userId } }
  )
    .then(num => {
      if (num == 1) {
        res.send({ message: "User approved successfully." });
      } else {
        res.send({ message: "Cannot approve user. Maybe user was not found." });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.denyUser = (req, res) => {
  const userId = req.params.id;
  User.update(
    { status: "denied" },
    { where: { id: userId } }
  )
    .then(num => {
      if (num == 1) {
        res.send({ message: "User denied successfully." });
      } else {
        res.send({ message: "Cannot deny user. Maybe user was not found." });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.suspendUser = (req, res) => {
  const userId = req.params.id;
  User.update(
    { status: "pending" },
    { where: { id: userId } }
  )
    .then(num => {
      if (num == 1) {
        res.send({ message: "User suspended successfully." });
      } else {
        res.send({ message: "Cannot suspend user. Maybe user was not found." });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.createEvent = (req, res) => {
  Event.create(req.body)
    .then(event => {
      res.send({ message: "Event created successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateEvent = (req, res) => {
  const id = req.params.id;
  Event.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Event updated successfully." });
      } else {
        res.send({ message: "Cannot update event. Maybe event was not found." });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteEvent = (req, res) => {
  const id = req.params.id;
  Event.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Event deleted successfully." });
      } else {
        res.send({ message: "Cannot delete event. Maybe event was not found." });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.createDestination = (req, res) => {
  Destination.create(req.body)
    .then(destination => {
      res.send({ message: "Destination created successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateDestination = (req, res) => {
  const id = req.params.id;
  Destination.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Destination updated successfully." });
      } else {
        res.send({ message: "Cannot update destination. Maybe destination was not found." });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteDestination = (req, res) => {
  const id = req.params.id;
  Destination.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Destination deleted successfully." });
      } else {
        res.send({ message: "Cannot delete destination. Maybe destination was not found." });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.createTravelTip = (req, res) => {
  TravelTip.create(req.body)
    .then(travelTip => {
      res.send({ message: "Travel tip created successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateTravelTip = (req, res) => {
  const id = req.params.id;
  TravelTip.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Travel tip updated successfully." });
      } else {
        res.send({ message: "Cannot update travel tip. Maybe travel tip was not found." });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteTravelTip = (req, res) => {
  const id = req.params.id;
  TravelTip.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Travel tip deleted successfully." });
      } else {
        res.send({ message: "Cannot delete travel tip. Maybe travel tip was not found." });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
