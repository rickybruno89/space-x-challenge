const availableURL = ["task"];
const words = [
  "monitor",
  "program",
  "application",
  "keyboard",
  "javascript",
  "gaming",
  "network",
];

const apiResponse = (res, httpStatus, response) => {
  res.statusCode = httpStatus;
  res.setHeader("content-Type", "application/json");
  res.end(JSON.stringify(response));
};

const isUrlValid = ({ url, headers }) => {
  const response = [{ message: "" }];
  const urlSplited = url.split("/");
  const finalUrl = url.replace("/api/", "");

  if (headers["content-type"] !== "application/json") {
    response[0].message =
      "SPACE-X-CHALLENGE API only works with 'Content-Type': 'application/json' Header";
    return [false, response, 401, finalUrl];
  }

  if (urlSplited[1] !== "api") {
    response[0].message =
      "For API use, you have to attach /api after port number";
    return [false, response, 401, finalUrl];
  }

  if (!availableURL.includes(urlSplited[2])) {
    response[0].message = `Entity URL not found. Available URL/s is/are ${availableURL
      .join(" - ")
      .toUpperCase()}`;
    return [false, response, 404, finalUrl];
  }

  if (urlSplited.lenght > 2) {
    response[0].message = "Invalid URL. Please fix URL to continue";
    return [false, response, 404, finalUrl];
  }

  return [true, null, null, finalUrl];
};

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min)) + min;
const randomWord = () => words[randomNumber(words.length, 0)];

module.exports = { apiResponse, isUrlValid, randomNumber, randomWord };
