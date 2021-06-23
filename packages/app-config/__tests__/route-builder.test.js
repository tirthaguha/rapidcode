"use strict";

const RouteBuilder = require("../lib/route-builder");

describe("route-builder", () => {
  test("test route builder", () => {
    const routeBuilder = new RouteBuilder();
    const userController = (req, res) => {
      res.send({});
    };
    const mw = (req, res, next) => {
      next();
    };
    let route = routeBuilder
      .setPath("/")
      .setMethod("GET")
      .setMiddlewares([mw])
      .setController(userController)
      .build();
    expect(route).toBeDefined();
  });

  test("test route builder, existing route", () => {
    const routeBuilder = new RouteBuilder();
    const userController = (req, res) => {
      res.send({});
    };
    const mw = (req, res, next) => {
      next();
    };
    let route = routeBuilder
      .setPath("/")
      .setMethod("GET")
      .setMiddlewares([mw])
      .setController(userController)
      .build();

    const routeBuilder2 = new RouteBuilder();
    route = routeBuilder2
      .setPath("/")
      .setMethod("POST")
      .setMiddlewares([mw])
      .setRouter(route)
      .setController(userController)
      .build();
    expect(route).toBeDefined();
  });
});
