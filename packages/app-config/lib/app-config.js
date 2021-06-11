"use strict";
const appSetup = require("./app");
const {
  createMultipleRouteConfigs,
  createRouteConfig,
  registerRouteWithApp,
} = require("./router");

const RouteBuilder = require("./route-builder");

module.exports = {
  appSetup,
  createMultipleRouteConfigs,
  createRouteConfig,
  registerRouteWithApp,
  RouteBuilder,
};
