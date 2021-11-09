const http = require("http");
const taskRoute = require("./task.js");
const { isUrlValid, apiResponse } = require("../helper.js");

const server = http.createServer((req, res) => {
  const [isValid, response, httpStatus, url] = isUrlValid(req);

  if (!isValid) {
    apiResponse(res, httpStatus, response);
  }
  // HTTP POST for differents entities. Now only one: TASK
  else if (url == "task") {
    taskRoute(req, res);
  }
});

module.exports = server;
