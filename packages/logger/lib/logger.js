"use strict";

let loggerRegistry = [];

const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `{"timestamp":${timestamp}, "label":[${label}],${level}: "${message}"}`;
});

const randomString = (length) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

const standardConfigObj = { loggerName: randomString(8), level: "info" };

const createWinstonLogger = (configObj = standardConfigObj) => {
  const { loggerName, level } = configObj;
  const defaultLogLevel = level;
  const logger = createLogger({
    level: defaultLogLevel,
    format: combine(label({ label: loggerName }), timestamp(), myFormat),
    transports: [new transports.Console()],
  });
  // name = name === undefined ? randomString(8) : name;

  loggerRegistry[loggerName] = logger;
  return logger;
};

const getLogger = (loggerName) => {
  if (!loggerRegistry[loggerName]) {
    createWinstonLogger({ loggerName: loggerName });
  }
  return loggerRegistry[loggerName];
};

const configLogger = (configObj) => {
  // TODO: add option to configure the logger
};

module.exports = getLogger;
