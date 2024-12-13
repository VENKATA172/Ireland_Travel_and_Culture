module.exports = (sequelize, Sequelize) => {
    const Destination = sequelize.define("destination", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      }
    }, {
        timestamps: false // Disable automatic timestamps
      });
    return Destination;
  };
