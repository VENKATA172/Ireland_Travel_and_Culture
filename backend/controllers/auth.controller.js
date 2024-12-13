const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

exports.register = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    role: "member",
    status: "pending"
  })
    .then(user => {
      res.send({ message: "User registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.login = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      if (user.status !== "approved") {
        return res.status(403).send({ message: "User not approved yet." });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.logout = (req, res) => {
  // Clear the token from the client-side (e.g., localStorage)
  res.status(200).send({ message: "Logged out successfully" });
};

exports.getRole = (req, res) => {
  const token = req.headers['authorization'].split(' ')[1];
  const decoded = jwt.verify(token, config.secret);
  User.findByPk(decoded.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      res.status(200).send({ role: user.role });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
