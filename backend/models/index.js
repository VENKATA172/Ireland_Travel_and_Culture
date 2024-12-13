const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  logging: console.log // Enable query logging
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./User.js")(sequelize, Sequelize);
db.Destination = require("./Destination.js")(sequelize, Sequelize);
db.Event = require("./Event.js")(sequelize, Sequelize);
db.Accommodation = require("./Accommodation.js")(sequelize, Sequelize);
db.TravelTip = require("./TravelTip.js")(sequelize, Sequelize);

module.exports = db;
