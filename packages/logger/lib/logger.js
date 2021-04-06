"use strict";
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};
let defaultLogLevel = levels.silly;
const setDefaultLogLevel = (level) => {
  defaultLogLevel = level;
};
const logger = {
  debug: (data) => {
    console.log(data);
  },
  info: (data) => {
    console.log(data);
  },
  warn: (data) => {
    console.warn(data);
  },
  error: (data) => {
    console.error(data);
  },
  levels,
  setDefaultLevel: setDefaultLogLevel,
};

module.exports = logger;
