const express = require("express");

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
  path,
  method,
  middlewares,
  controller,
  router = express.Router(),
}) => {
  router.route(path)[method.toLowerCase()](...middlewares, controller);
  return router;
};

const createMultipleRouteConfigs = (routeConfig) => {
  const router = express.Router();
  routeConfig.forEach((config) => {
    createRouteConfig({ ...config, router });
  });
  return router;
};

module.exports = {
  createMultipleRouteConfigs,
  createRouteConfig,
  registerRouteWithApp,
};
