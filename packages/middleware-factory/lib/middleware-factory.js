"use strict";

const middlewareFactory = {
  createMiddleware: ({ log = true, injectData = false, func }) => (
    req,
    res,
    next
  ) => {
    try {
      const response = injectData ? func(req, res) : func();
      res.locals[`${func.name}Response`] = response;
      next();
    } catch (error) {
      next({ message: error });
    }
  },

  createAsyncMiddleware: ({ log = true, injectData = false, func }) => async (
    req,
    res,
    next
  ) => {
    try {
      const t1 = Date.now();
      const response = injectData ? await func(req, res.locals) : await func();
      const t2 = Date.now();
      console.log(`Time Taken to execute async ${func.name}`, t2 - t1);
      res.locals[`${func.name}Response`] = response;
      next();
    } catch (error) {
      next({ message: error });
    }
  },
};
module.exports = middlewareFactory;
