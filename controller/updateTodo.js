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
    const updatedData = await Todolist.findOne({
      attributes: ["id", "taskName", "time"],
      where: { id },
    });
    if (updatedlist == 1) {
      return {
        statusCode: 201,
        body: JSON.stringify({
          success: true,
          message: "Updated Successfully",
          updatedData,
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
