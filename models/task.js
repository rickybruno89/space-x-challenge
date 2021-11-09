const { randomWord, randomNumber } = require("../helper");

const TASK_CATEGORIES = ["Maintenance", "Research", "Test"];

const randomTitle = () => {
  const word = randomWord();
  const number = randomNumber(1, 100);
  return `bug-${word}-${number}`;
};

const randomMember = () => {
  return randomNumber(1, 10);
};

const task = [
  {
    type: "issue",
    label: "ISSUE",
    title: "",
    description: "",
    assignedTo: null,
  },
  {
    type: "bug",
    label: "BUG",
    title: "",
    description: "",
    assignedTo: null,
  },
  {
    type: "task",
    label: "TASK",
    title: "",
    category: "",
    assignedTo: null,
  },
];

const checkValidModel = (body) => {
  const { type } = body;
  const response = [{ message: "" }];
  if (type === "issue") {
    if (!body.hasOwnProperty("title") || !body.hasOwnProperty("description")) {
      response[0].message =
        "You need to provide a TITLE and DESCRIPTION of the ISSUE";
      return [false, response, null];
    } else {
      const { title, description } = body;
      const task = {
        title,
        description,
        assignedUser: null,
      };
      return [true, null, task];
    }
  } else if (type === "bug") {
    if (!body.hasOwnProperty("description")) {
      response[0].message = "You need to provide a DESCRIPTION of the BUG";
      return [false, response, null];
    } else {
      const { description } = body;
      const task = {
        title: randomTitle(),
        description,
        label: "BUG",
        assignedUser: randomMember(),
      };
      return [true, null, task];
    }
  } else if (type === "task") {
    if (!body.hasOwnProperty("title") || !body.hasOwnProperty("category")) {
      response[0].message =
        "You need to provide a TITLE and CATEGORY of the TASK";
      return [false, response, null];
    } else {
      const { title, category } = body;
      if (!TASK_CATEGORIES.includes(category)) {
        response[0].message = `Category must be one of ${TASK_CATEGORIES.join(
          " - "
        )}`;
        return [false, response, null];
      } else {
        const task = {
          title,
          category,
        };
        return [true, null, task];
      }
    }
  } else {
    response[0].message =
      "You need to provide a TYPE for create a task. Use 'ISSUE' or 'BUG' or 'TASK' as value of TYPE property";
    return [false, response, null];
  }
};

module.exports = {
  checkValidModel,
};
