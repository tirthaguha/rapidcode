"use strict";
const express = require("express");
const {
  createRouteConfig,
  registerRouteWithApp,
  routerErrorObj,
} = require("../lib/router");

describe("@rapidcode/router", () => {
  test("router: createRouteConfig, no middleware", () => {
    const userController = (req, res, next) => {
      res.send({});
    };
    const router = createRouteConfig({
      path: "/",
      middlewares: [],
      method: "GET",
      controller: userController,
    });
    expect(router).toBeDefined();
  });
  test("router: createRouteConfig, with middlewares", () => {
    const userController = (req, res) => {
      res.send({});
    };
    const mw = (req, res, next) => {
      next();
    };
    const router = createRouteConfig({
      path: "/",
      middlewares: [mw],
      method: "GET",
      controller: userController,
    });
    expect(router).toBeDefined();
  });
  test("router: createRouteConfig, with no params", () => {
    const userController = (req, res) => {
      res.send({});
    };
    const router = createRouteConfig({
      controller: userController,
    });
    // console.log(router);
    expect(router).toBeDefined();
  });

  test("router: createRouteConfig, with no params", () => {
    expect(() => createRouteConfig({ controller: "() => {}" })).toThrow(
      routerErrorObj.ROUTER_UNDEFINED_CONTROLLER
    );
  });

  test("router: registerRouteWithApp", () => {
    const app = express();
    const userController = (req, res) => {
      res.send({});
    };
    const router = createRouteConfig({
      controller: userController,
    });
    registerRouteWithApp(app, [{ path: "/test", router: router }], true);
    expect(app).toBeDefined();
  });

  test("router: registerRouteWithApp no generic error handler", () => {
    const app = express();
    const userController = (req, res) => {
      res.send({});
    };
    const router = createRouteConfig({
      controller: userController,
    });
    registerRouteWithApp(app, [{ path: "/test", router: router }], false);
    expect(app).toBeDefined();
  });
});
