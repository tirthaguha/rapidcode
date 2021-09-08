"use strict";

const {
  createMiddleware,
  createAsyncMiddleware,
} = require("../lib/middleware");

describe("@rapidcode/middleware Sync Middleware Tests", () => {
  test("should invoke middleware synchronous and execute", () => {
    let mockObj = false;
    const mockFn = () => {
      mockObj = true;
    };
    const mw = createMiddleware({ log: true, func: mockFn });
    mw({}, {}, () => {});
    expect(mockObj).toBe(true);
  });

  test("should invoke next if successful", () => {
    let mockObj = false;
    const mockFn = () => {};
    const mw = createMiddleware({ func: mockFn });
    mw({}, {}, () => {
      mockObj = true;
    });
    expect(mockObj).toBe(true);
  });

  test("should attach the return of the function to res.locals", () => {
    const mockFn = () => {
      return true;
    };
    const mw = createMiddleware({ func: mockFn });
    const res = { locals: {} };
    mw({}, res, () => {});
    // console.log(res);
    expect(res).toEqual({
      locals: {
        mockFnResponse: true,
      },
    });
  });

  test("should handle the error, with no status", () => {
    const mockFn = () => {
      throw Error("Random Error");
    };
    const mw = createMiddleware({ log: false, func: mockFn });
    let errorObj = {};
    mw({}, {}, (err) => {
      errorObj = err;
    });
    expect(errorObj).toEqual({
      status: 500,
      message: "Random Error",
    });
  });

  test("should handle the error with status", () => {
    const mockFn = () => {
      throw { message: "Random Error", status: 400 };
    };
    const mw = createMiddleware({ log: true, func: mockFn });
    let errorObj = {};
    mw({}, {}, (err) => {
      errorObj = { message: err.message, status: err.status };
    });
    expect(errorObj).toEqual({
      status: 400,
      message: "Random Error",
    });
  });
});

describe("@rapidcode/middleware, Async Middleware tests", () => {
  test("should invoke async middleware and return data", async () => {
    const mockFn = async () => {
      const x = await "data in a long string";
      return x;
    };
    const mw = createAsyncMiddleware({ func: mockFn });
    let resObj = {
      locals: {},
    };
    await mw({}, resObj, () => {
      expect(resObj.locals.mockFnResponse).toBe("data in a long string");
    });
  });

  test("should invoke async middleware and return data, no logging", async () => {
    const mockFn = async () => {
      const x = await "data in a long string";
      return x;
    };
    const mw = createAsyncMiddleware({ func: mockFn, log: false });
    let resObj = {
      locals: {},
    };
    await mw({}, resObj, () => {
      expect(resObj.locals.mockFnResponse).toBe("data in a long string");
    });
  });

  test("should invoke async middleware, may not return data", async () => {
    let mockObj = false;
    const mockFn = async () => {
      mockObj = await true;
    };
    const mw = createAsyncMiddleware({ log: false, func: mockFn });
    let resObj = {
      locals: {},
    };
    await mw({}, resObj, () => {
      expect(resObj.locals).toEqual({});
      console.log(resObj);
      expect(mockObj).toBe(true);
    });
  });

  test("should handle error from async middleware", async () => {
    const mockFn = async () => {
      throw { message: "Random Error", status: 400 };
    };
    const mw = createAsyncMiddleware({ log: false, func: mockFn });
    await mw({}, {}, (err) => {
      expect(err).toEqual({ message: "Random Error", status: 400 });
    });
  });

  test("should handle error from async middleware", async () => {
    const mockFn = async () => {
      throw Error("Random Error");
    };
    const mw = createAsyncMiddleware({ log: false, func: mockFn });
    await mw({}, {}, (err) => {
      console.log(err);
      expect(err).toEqual({ message: "Random Error", status: 500 });
    });
  });
});
