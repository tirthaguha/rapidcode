"use strict";

const getLogger = require("@rapidcode/logger");
const logger = getLogger("@rapidcode/middleware");

const createErrorObj = (error, status = 500) => {
  const { message } = error;
  return {
    status,
    message,
  };
};

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
        logger.error(error);
        if (error.message && error.status) {
          next(error);
        } else {
          next(createErrorObj(error));
        }
      }
    },

  createAsyncMiddleware:
    ({ log = true, func }) =>
    async (req, res, next) => {
      try {
        const t1 = Date.now();
        const response = await func(req, res);
        const t2 = Date.now();
        if (log) {
          logger.info(`Time Taken to execute async ${func.name} is ${t2 - t1}`);
        }
        if (response) {
          res.locals[`${func.name}Response`] = response;
          if (log) {
            logger.info("response = " + JSON.stringify(response));
          }
        }
        next();
      } catch (error) {
        logger.error("async error", error);
        if (error.message && error.status) {
          next(error);
        } else {
          next(createErrorObj(error));
        }
      }
    },
};
module.exports = middlewareFactory;
