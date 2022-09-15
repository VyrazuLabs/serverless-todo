const db = require("../connection/config");
const Todolist = db.todolist;

/* Get all events present in the todolist */

module.exports.lambdaHandler = async (event, context) => {
  try {
    const list = await Todolist.findAll();
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        list,
      }),
    };
  } catch (err) {
    return {
      body: JSON.stringify(err),
    };
  }
};
