const { apiResponse } = require("../helper");
const { createTask } = require("../controllers/task");

const taskRoute = (req, res) => {
  if (req.method === "POST") {
    createTask(req, res);
  } else {
    apiResponse(res, 404, [{ message: `Method ${req.method} not available` }]);
  }
};

module.exports = taskRoute;
