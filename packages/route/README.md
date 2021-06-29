# `@rapidcode/route`

> wrapper on express.Route() for creating express routes, that can be attached to any express application

## Usage

This library, exposes two methods `RouteCreator`and `RouteBuilder`. Both of them **does the same thing**, ie, create an express Router, but in a different way.

### Creating the Route with `RouteCreator`

```javascript
//userRouter.js
const { RouteCreator } = require("@rapidcode/route");
const controller = (req, res, next) => {
  res.send({ status: success });
};
const mwOne = (req, res, next) => {
  // Your middleware to write the business logic
  next();
};

const mwTwo = (req, res, next) => {
  // Your middleware to write the business logic
  next();
};
const router = RouteCreator({
  path: "/",
  middlewares: [mwOne, mwTwo],
  method: "GET",
  controller: controller,
});

module.export = router;
```

### Creating the Route with `RouteCreator`

```javascript
//userRouter.js
const { RouteBuilder } = require("@rapidcode/route");
const controller = (req, res, next) => {
  res.send({ status: success });
};
const mwOne = (req, res, next) => {
  // Your middleware to write the business logic
  next();
};

const mwTwo = (req, res, next) => {
  // Your middleware to write the business logic
  next();
};

const routeBuilder = new RouteBuilder();

let router = routeBuilder
  .setPath("/")
  .setMethod("GET")
  .setMiddlewares([mwOne, mwTwo])
  .setController(controller)
  .build();

module.export = router;
```

## Using the Routes created with @rapidcode/route

Either of these routers can be attached to any express application.

### Use with generic express app

```javascript
const express = require("express");
const router = require("./userRouter");
const app = express();
app.use("/user", userRouter);
```

### use with `@rapidcode/app`

```javascript
const { createApp, registerRoute } = require("@rapidcode/app");
const app = createApp(); // this is the express app object
var usersRouter = require("./userRouter");

registerRoute(app, "/users", usersRouter); //
```

### PS:

You may want to have a look at [`@rapidcode/app`](../app/README.md) for creating the express app.

Also, for creating the middleware, do have a look at [`@rapidcode/middleware`](../middleware/README.md)
