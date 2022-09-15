const db = require("../connection/config");
const Todolist = db.todolist;

/* Deleting an event(by id) from the todolist */
module.exports.lambdaHandler = async (event, context) => {
  try {
    const { id } = event.pathParameters;
    const deletedlist = await Todolist.destroy({ where: { id } });
  } catch (err) {
    return {
      body: JSON.stringify(err),
    };
  }
};