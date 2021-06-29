# `@rapidcode/app`

> TODO: description

## Usage

This module exposes 3 methods, the `createApp`, the `registerRoute` and the `registerMultipleRoutes`.

### Creating the app

```javascript
const { createApp } = require("@rapidcode/app");
const app = createApp(); // this is the express app object

var usersRouter = require("./routes/users"); // must be a express.Router() object
app.use("/users", usersRouter);

app.listen("8000", () => {
  console.log("Running on http://localhost:8000");
});
```

### Registering a route with the app

```javascript
const { createApp, registerRoute } = require("@rapidcode/app");
const app = createApp(); // this is the express app object
var usersRouter = require("./routes/users"); // must be a express.Router() object

registerRoute(app, "/users", usersRouter); // attach the route with the app

app.listen("8000", () => {
  console.log("Running on http://localhost:8000");
});
```

### Registering multiple routes

```javascript
const { createApp, registerMultipleRoutes } = require("@rapidcode/app");
const app = createApp(); // this is the express app object
var usersRouter = require("./routes/users"); // must be a express.Router() object
var productsRouter = require("./routes/products"); // must be a express.Router() object

registerMultipleRoutes(app, [
  { path: "/users", router: usersRouter },
  { path: "/products", router: productsRouter },
]);

app.listen("8000", () => {
  console.log("Running on http://localhost:8000");
});
```
