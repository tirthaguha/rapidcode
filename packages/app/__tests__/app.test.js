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
    let testRouter2 = express.Router();
    testRouter.route("/get")["get"]((req, res) => {
      res.send({});
    });
    testRouter2.route("/post")["post"]((req, res) => {
      res.send({});
    });
    registerMultipleRoutes(app, [{ path: "/users", router: testRouter }, { path: "/products", router: testRouter2 }]);
    app.use('/test', (req, res) => {//doesn't show up
      res.send({});
    })

    const routes = {}
    function routerRecursion(middleware, pointer) {
      // console.log(middleware.route);
      if (middleware.route) { // routes registered directly on the app
        if (!Array.isArray(pointer['routes'])) {
          pointer['routes'] = []
        }
        const routeObj = {
          path: middleware.route.path,
          method: middleware.route.stack[0].method
        }
        pointer['routes'].push(routeObj)
      } else if (middleware.name === 'router') { // inside router
        const current = middleware.regexp.toString().replace(/\/\^\\\//, '').replace(/\\\/\?\(\?\=\\\/\|\$\)\/\i/, '')
        pointer[current] = {}
        middleware.handle.stack.forEach(function (handler) {
          routerRecursion(handler, pointer[current], current)
        });
      }
    }
    app._router.stack.forEach(function (middleware) {
      routerRecursion(middleware, routes)
    });
    console.log(JSON.stringify(routes,null, 2));

    

    // console.log(app._router.stack.filter(r=>r))
    expect(routes).toMatchObject(  {
      "users": {
        "routes": [
          {
            "path": "/get",
            "method": "get"
          }
        ]
      },
      "products": {
        "routes": [
          {
            "path": "/post",
            "method": "post"
          }
        ]
      }
    });
  });
});
