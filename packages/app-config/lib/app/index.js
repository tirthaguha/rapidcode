const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const nocache = require("nocache");
const helmet = require("helmet");
const cors = require("cors");

const appSetup = ({ useLogger, useCors, useNoCache, useHelmet }) => {
  const app = express();
  if (useLogger) {
    app.use(logger("dev"));
  }
  if (useCors) {
    app.use(cors());
  }
  if (useNoCache) {
    app.use(nocache());
  }
  if (useHelmet) {
    app.use(helmet.xssFilter());
    app.use(helmet.referrerPolicy({ policy: "same-origin" }));
  }

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  return app;
};

module.exports = appSetup;
