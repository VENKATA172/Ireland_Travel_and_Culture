module.exports = (sequelize, Sequelize) => {
    const Accommodation = sequelize.define("accommodation", {
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      }
    }, {
        timestamps: false // Disable automatic timestamps
      });
    return Accommodation;
  };
