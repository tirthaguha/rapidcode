# `@rapidcode/middleware`

> This package is used to wrap around any normal method and make it a express middleware

## Usage

This package exposes two methods, `createMiddleware` and `createAsyncMiddleware`;

### Scenario 1: Generic Usage of `createMiddleware`

It can be used to wrap any function, **as long as its not asynchronous**, ie, not making an API call or fetching data from a DB etc.

```javascript
const { createMiddleware } = require("@rapidcode/middleware");

function doSomething() {
  // All the Business Logic
}

const middleware = createMiddleware(doSomething);
```

### Scenario 2: When your function needs to access the `req` or `res` object

You can access req and res objects in your function too.

```javascript
const { createMiddleware } = require("@rapidcode/middleware");

function validateParameters(req, res) {
  if (!req.body.username || !req.body.password) {
    const err = {
      status: 400,
      message: "Invalid Parameters",
    };
    throw err;
  } else {
    // your business logic
  }
}

const middleware = createMiddleware(validateParameters);
```

### Scenario 3: When your function returns data

You can return data from your function too, and that will be available to the next middlewares or controller.

The data returned can be of `any` type, and is available in the res.locals."FunctionName"Response object.
For eg. if the name of your function is "validateParameters", the returned data from it will be available in "res.locals.validateParamsResponse".

```javascript
const { createMiddleware } = require("@rapidcode/middleware");
var express = require("express");

function validateParameters(req, res) {
  if (!req.body.username || !req.body.password) {
    const err = {
      status: 400,
      message: "Invalid Parameters",
    };
    throw err;
  } else {
    // RETURN STATUS FLAG
    return "Successfully Authenticated"; // this will be available as res.locals.validateParametersResponse
  }
}

const middleware = createMiddleware(validateParameters);

var router = express.Router();

router.post("/", validateParameters, (req, res, next) => {
  const validationData = res.locals.validateParametersResponse;
  res.send({ data: validationData }); //should return { data:"Successfully Authenticated" }
});
```

### createAsyncMiddleware

createAsyncMiddleware behaves exactly the same way as createMiddleware, only difference being, it returns an async middleware. It is most suitable for wrapping your API Calls.

```javascript
const { createAsyncMiddleware } = require("@rapidcode/middleware");
const got = require("got");
var express = require("express");

const dataService = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const options = {
    method: "GET",
  };
  const response = await got(url, options);
  const { body } = response;
  const respBody = JSON.parse(body);
  return respBody;
};

const asyncServiceMiddleware = createAsyncMiddleware({ func: dataService });

router.get("/", asyncServiceMiddleware, (req, res, next) => {
  const { dataServiceResponse } = res.locals;
  res.send(dataServiceResponse);
});
```
