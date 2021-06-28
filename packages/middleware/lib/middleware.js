"use strict";

const getLogger = require("@rapidcode/logger");
const logger = getLogger("@rapidcode/middleware");

const middlewareFactory = {
  createMiddleware:
    ({ log = true, func }) =>
    (req, res, next) => {
      try {
        const response = func(req, res);
        if (response) {
          res.locals[`${func.name}Response`] = response;
        }
        next();
      } catch (error) {
        next({ message: error });
      }
    },

  createAsyncMiddleware:
    ({ log = true, func }) =>
    async (req, res, next) => {
      try {
        const t1 = Date.now();
        const response = await func(req, res);
        const t2 = Date.now();
        logger.info(`Time Taken to execute async ${func.name} is ${t2 - t1}`);
        if (response) {
          res.locals[`${func.name}Response`] = response;
        }
        logger.info("response = " + JSON.stringify(response));
        next();
      } catch (error) {
        logger.error(error);
        next({ message: error });
      }
    },
};
module.exports = middlewareFactory;
