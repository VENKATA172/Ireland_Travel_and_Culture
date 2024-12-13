module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      timestamps: false // Disable automatic timestamps
    });
    return User;
  };
