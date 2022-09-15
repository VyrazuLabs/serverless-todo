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
