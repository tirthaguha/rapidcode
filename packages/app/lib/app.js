"use strict";
const express = require("express");

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  return app;
};

const registerRoute = (app, path, route) => {
  app.use(path, route);
};

const registerMultipleRoutes = (app, routes) => {
  routes.forEach((route) => {
    const { path, router } = route;
    registerRoute(app, path, router);
  });
};

module.exports = { createApp, registerRoute, registerMultipleRoutes };
