"use strict";

// const createLogger = require("../../../common/logger");
// const logger = createLogger();

const middlewareFactory = {
  createMiddleware:
    ({ log = true, injectData = false, func }) =>
    (req, res, next) => {
      try {
        const response = injectData ? func(req, res) : func();
        res.locals[`${func.name}Response`] = response;
        next();
      } catch (error) {
        next({ message: error });
      }
    },

  createAsyncMiddleware:
    ({ log = true, injectData = false, func }) =>
    async (req, res, next) => {
      try {
        const t1 = Date.now();
        const response = injectData
          ? await func(req, res.locals)
          : await func();
        const t2 = Date.now();
        console.info(`Time Taken to execute async ${func.name} is ${t2 - t1}`);
        res.locals[`${func.name}Response`] = response;
        console.info("response = " + JSON.stringify(response));
        next();
      } catch (error) {
        console.error(error);
        next({ message: error });
      }
    },
};
module.exports = middlewareFactory;
