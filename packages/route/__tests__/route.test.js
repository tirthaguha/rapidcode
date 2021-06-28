"use strict";

// const express = require("express");
const { RouteCreator, RouteBuilder } = require("..");

describe("@rapidcode/route", () => {
  test("routeCreator", () => {
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
});
