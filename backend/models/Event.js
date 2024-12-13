module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
      name: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      }
    }, {
        timestamps: false // Disable automatic timestamps
      });
    return Event;
  };
