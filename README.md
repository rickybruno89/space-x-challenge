# The Space-x Challenge
This is a project for create task in a board

## Prerequisites
- Have NodeJS installed on your machine

## Running the code
- Clone the repository
- Go to root folder of the project
- run `node server.js` the starting point of the app

## How to POST request (the only available)
- Content-Type header always need to be 'application/json' 
- The url for HTTP POST is http://localhost:3000/api/task
- The HTTP body must be a object
- Here is an example of accepted objects body
```
// for type "issue"
{
    "type": "issue",
    "title": "any title",
    "description": "any description"
}

// for type "bug"
{
    "type": "bug",
    "description": "any description"
}

// for type "task"
{
    "type": "task",
    "title": "any title",
    "category": "a category"
}
```

## Data restrictions
#### The script only accepts 3 differents type:
##### issue
* need a title and description
##### bug
* need only a description
##### task
* need a title and a category
    * category only allows the next values:
    1. Maintenance
    2. Research
    3. Test

> **_NOTE:_**  You can use your favorite api client like POSTMAN, or just use CURL