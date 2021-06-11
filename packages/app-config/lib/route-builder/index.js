const express = require("express");

const RouteBuilder = function () {
  this.path = "/";
  this.method = "GET";
  this.middlewares = [];
  this.controller = undefined;
  this.router = express.Router();

  this.setPath = function (path) {
    this.path = path;
    return this;
  };
  this.setMethod = function (method) {
    this.method = method;
    return this;
  };
  this.setMiddlewares = function (middlewares) {
    this.middlewares = middlewares;
    return this;
  };
  this.setController = function (controller) {
    this.controller = controller;
    return this;
  };
  this.setRouter = function (router) {
    this.router = router;
    return this;
  };
  this.build = function () {
    // console.log("this.method.toLowerCase() ", this.method.toLowerCase());
    // console.log("...this.middlewares ", ...this.middlewares);
    // console.log("this.path ", this.path);
    // console.log("this.controller ", this.controller);
    this.router
      .route(this.path)
      [this.method.toLowerCase()](...this.middlewares, this.controller);
    return this.router;
  };
};

module.exports = RouteBuilder;
