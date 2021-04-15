"use strict";
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

const logger = createLogger({
  transports: [new transports.Console()],
});

module.exports = logger;
