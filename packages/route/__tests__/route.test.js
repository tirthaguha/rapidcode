"use strict";

const express = require("express");
const app = express();
const { RouteCreator, RouteBuilder } = require("../lib/route");

describe("@rapidcode/route", () => {
  test("routeCreator, no middleware", () => {
    const userController = (req, res, next) => {
      res.send({});
    };
    const router = RouteCreator({
      path: "/",
      middlewares: [],
      method: "GET",
      controller: userController,
    });
    expect(router).toBeDefined();
  });

  test("routeCreator, with middleware", () => {
    const userController = (req, res, next) => {
      res.send({});
    };
    const mw = (req, res, next) => {
      next();
    };
    const router = RouteCreator({
      path: "/",
      middlewares: [mw],
      method: "GET",
      controller: userController,
    });
    expect(router).toBeDefined();
  });

  test("routeCreator, no controller, should throw", () => {
    expect(() => {
      RouteCreator({
        path: "/",
        middlewares: [],
        method: "GET",
      });
    }).toThrow("Controller is undefined or is not a valid function");
  });

  test("routeCreator, test the defaults", () => {
    const userController = (req, res, next) => {
      res.send({});
    };
    const router = RouteCreator({
      controller: userController,
    });
    expect(router).toBeDefined();
  });

  test("routeCreator, test errors", () => {
    expect(RouteCreator).toThrow();
  });

  test("routeBuilder", () => {
    const routeBuilder = new RouteBuilder();
    const userController = (req, res) => {
      res.send({});
    };
    const mw = (req, res, next) => {
      next();
    };
    let router = routeBuilder
      .setPath("/")
      .setMethod("GET")
      .setMiddlewares([mw])
      .setController(userController)
      .build();
    expect(router).toBeDefined();
  });

  test("routeBuilder, multiple methods to same route", () => {
    const routeBuilder = new RouteBuilder();
    const userController = (req, res) => {
      res.send({});
    };
    const mw = (req, res, next) => {
      next();
    };
    let router = routeBuilder
      .setPath("/")
      .setMethod("GET")
      .setMiddlewares([mw])
      .setController(userController)
      .build();

    router = routeBuilder
      .setPath("/")
      .setMethod("POST")
      .setMiddlewares([mw])
      .setController(userController)
      .setRouter(router)
      .build();

    // expect(router).toBeDefined();

    app.use("/test", router);

    //check if the route has been attached to the application;
    const route = app._router.stack.filter((elem) => {
      return elem.name === "router";
    });
    // console.log(route[0].handle.stack[1].route.stack[1]);
    expect(
      route[0].handle.stack[1].route.stack[1].name == "userController"
    ).toBe(true);
    expect(route[0].handle.stack[1].route.stack[1].method).toBe("post");
  });
});
