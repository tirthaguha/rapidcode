"use strict";
const express = require("express");

const { createApp, registerMultipleRoutes } = require("..");

describe("@rapidcode/app", () => {
  test("test app", () => {
    const app = createApp();
    expect(app).toBeDefined();
  });

  test("test route attachment", () => {
    const app = createApp();
    let testRouter = express.Router();
    testRouter.route("/")["get"]((req, res) => {
      res.send({});
    });
    registerMultipleRoutes(app, [{ path: "/users", router: testRouter }]);
    expect(app).toBeDefined();
  });
});
