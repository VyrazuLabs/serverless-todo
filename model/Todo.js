module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define("todo", {
      taskName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      time: {
        type: Sequelize.ENUM("Morning", "Afternoon", "Evening", "Night"),
      },
    });
  
    return Todo;
  };