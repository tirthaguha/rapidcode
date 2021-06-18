"use strict";

const appSetup = require("../lib/app");

describe("@rapidcode/app-config", () => {
  test("appSetup: if app is created", () => {
    const app = appSetup();
    expect(app).toBeDefined();
  });
});
