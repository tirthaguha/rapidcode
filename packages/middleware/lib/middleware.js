"use strict";

const getLogger = require("@rapidcode/logger");
const logger = getLogger("@rapidcode/middleware");

const createErrorObj = (error, status = 500) => {
  // console.log(">>>>>>>>", error.message);
  const {message} = error;
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
        logger.info(`Time Taken to execute async ${func.name} is ${t2 - t1}`);
        if (response) {
          res.locals[`${func.name}Response`] = response;
        }
        logger.info("response = " + JSON.stringify(response));
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
};
module.exports = middlewareFactory;
