const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.User;

verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  token = token.split(' ')[1]; // Extract the token part after 'Bearer '

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).send({
          message: "Token expired!"
        });
      }
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    if (user.role === "admin") {
      next();
      return;
    }

    res.status(403).send({
      message: "Require Admin Role!"
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin
};
module.exports = authJwt;
