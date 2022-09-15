const db = require("../connection/config");
const Todolist = db.todolist;

/* Update an event in the list by id */

module.exports.lambdaHandler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    const { taskName, time } = data;
    const { id } = event.pathParameters;
    const updatedlist = await Todolist.update(
      { taskName, time },
      { where: { id } }
    );
    
} catch (err) {
    return {
      body: JSON.stringify(err),
    };
  }
};
