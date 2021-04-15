"use strict";
const appSetup = require("./app");
const {
  createMultipleRouteConfigs,
  createRouteConfig,
  registerRouteWithApp,
} = require("./router");
module.exports = {
  appSetup,
  createMultipleRouteConfigs,
  createRouteConfig,
  registerRouteWithApp,
};
