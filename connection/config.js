const Sequelize = require("sequelize");


const sequelize = new Sequelize("postgres", "postgres", "hello", {
  host: "localhost",
  dialect: "postgres",
});

/* Doing the Connection */

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todolist = require("../model/Todo")(sequelize, Sequelize);
// sequelize.sync({ force: true });
// console.log("All models were synchronized successfully.");

module.exports = db