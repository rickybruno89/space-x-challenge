const querystring = require('querystring');
const https = require('https');
const { apiResponse } = require("../helper");
const {
  checkValidModel,
} = require("../models/task");

const createTask = (req, res) => {
  let data = "";

  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    let body = JSON.parse(data);
    const [isValid, response, task] = checkValidModel(body);
    if (!isValid) return apiResponse(res, 400, response);
    else {
      const response = [{message: 'Created', task}]
      apiResponse(res, 201, response);
    }
  });
};

module.exports = { createTask };
