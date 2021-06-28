"use strict";
const createExpressApp, {registerRouteWithApp} = require("./appCreator");
const { createRouteConfig } = require("./routeBuilder/createRoute");
const RouteBuilder = require("./routeBuilder/buildRoute");

module.exports = {
  createExpressApp,
  createRouteConfig,
  registerRouteWithApp,
  RouteBuilder,
};
