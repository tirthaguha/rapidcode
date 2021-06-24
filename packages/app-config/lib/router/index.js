const express = require("express");

const routerErrorObj = {
  ROUTER_UNDEFINED_CONTROLLER:
    "Controller is undefined or is not a valid function",
};

const addGenericErrorHandler = (app) => {
  app.use((req, res, next) => {
    next({ status: 404, message: "invalid route" });
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    return res.json(
      { message: err.message } || { message: "internal server error" }
    );
  });
};

const registerRouteWithApp = (app, routes, useGenericErrorHandlers) => {
  routes.forEach((route) => {
    app.use(route.path, route.router);
  });
  if (useGenericErrorHandlers) {
    addGenericErrorHandler(app);
  }
};

const createRouteConfig = ({
  path = "/",
  method = "GET",
  middlewares = [],
  controller,
  router = express.Router(),
}) => {
  if (!controller || typeof controller != "function") {
    throw routerErrorObj.ROUTER_UNDEFINED_CONTROLLER;
  }

  if (middlewares.length) {
    router.route(path)[method.toLowerCase()](...middlewares, controller);
  } else {
    router.route(path)[method.toLowerCase()](controller);
  }

  return router;
};

module.exports = {
  createRouteConfig,
  registerRouteWithApp,
  routerErrorObj,
};
