module.exports = (sequelize, Sequelize) => {
    const TravelTip = sequelize.define("travel_tip", {
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      }
    }, {
        timestamps: false // Disable automatic timestamps
      });
    return TravelTip;
  };
