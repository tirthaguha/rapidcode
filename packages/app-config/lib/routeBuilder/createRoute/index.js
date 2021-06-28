const express = require("express");

const routerErrorObj = {
  ROUTER_UNDEFINED_CONTROLLER:
    "Controller is undefined or is not a valid function",
};

const RouteCreator = ({
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

module.exports = RouteCreator;
