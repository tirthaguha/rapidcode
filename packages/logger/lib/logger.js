"use strict";

const createLogger = require("../../../common/logger");

// const logHandler = {
//   apply: async (target, thisArg, argumentList) => {
//     logger.info("Entry");
//     const t1 = Date.now();
//     await target(...argumentList);
//     const t2 = Date.now();
//     logger.info(`Time Taken to execute async ${target.name} is ${t2 - t1}`);
//     logger.info("Exit");
//   },
// };

// const withLogger = (middleware) => {
//   const proxy = new Proxy(middleware, logHandler);
// };

module.exports = createLogger;
