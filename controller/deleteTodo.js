const db = require("../connection/config");
const Todolist = db.todolist;

/* Deleting an event(by id) from the todolist */
module.exports.lambdaHandler = async (event, context) => {
  try {
    const { id } = event.pathParameters;
    const deletedlist = await Todolist.destroy({ where: { id } });
    if (deletedlist == 1) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: "Deleted Successfully",
        }),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Id not found" }),
      };
    }
  } catch (err) {
    return {
      body: JSON.stringify(err),
    };
  }
};
