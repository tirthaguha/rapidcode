"use strict";
// const { info } = require("winston");
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const createWinstonLogger = (level = "info") => {
  const defaultLogLevel = level;
  const logger = createLogger({
    level: defaultLogLevel,
    format: combine(label({ label: "right meow!" }), timestamp(), myFormat),
    transports: [new transports.Console()],
  });
  return logger;
};

module.exports = createWinstonLogger;
