const db = require("../connection/config");
const Todolist = db.todolist;

/* Adding an event to the todolist */
module.exports.lambdaHandler = async (event, context) => {
  try {
    const todo = JSON.parse(event.body);
    const newevent = await Todolist.create(todo);
    return {
      statusCode: 201,
      body: JSON.stringify({
        success: true,
        message: "Created Successfully",
      }),
    };
  } catch (err) {
    return {
      body: JSON.stringify(err),
    };
  }
};
