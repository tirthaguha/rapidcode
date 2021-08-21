'use strict';

const {createMiddleware, createAsyncMiddleware} = require('../lib/middleware');

describe('@rapidcode/middleware', () => {
    test('should invoke middleware synchronous and execute', () => {
        let mockObj = false;
        const mockFn = ()=>{
            mockObj=true;
        }
        const mw = createMiddleware({log:true, func:mockFn})
        mw({},{}, ()=>{});
        expect(mockObj).toBe(true);
    });

    test('should invoke next if successful', () => {
        let mockObj = false;
        const mockFn = ()=>{
        }
        const mw = createMiddleware({func:mockFn})
        mw({},{}, ()=>{mockObj=true;});
        expect(mockObj).toBe(true);
    });

    test('should attach the return of the function to res.locals', () => {
        const mockFn = ()=>{
            return true;
        }
        const mw = createMiddleware({func:mockFn})
        const res = {locals:{}};
        mw({},res, ()=>{});
        // console.log(res);
        expect(res).toEqual({locals:{
            mockFnResponse:true
        }});
    });

    test('should handle the error, with no status', () => {
        const mockFn = ()=>{
            throw Error("Random Error");
        }
        const mw = createMiddleware({log:false, func:mockFn});
        let errorObj = {};
        mw({},{}, (err)=>{ 
            errorObj = err;
        });
        expect(errorObj).toEqual( {
            status: 500,
            message: "Random Error"
          });
    });

    test('should handle the error with status', () => {
        const mockFn = ()=>{
            throw ({message:"Random Error", status: 400});
        }
        const mw = createMiddleware({log:false, func:mockFn});
        let errorObj = {};
        mw({},{}, (err)=>{ 
            errorObj = {message:err.message, status:err.status};
        });
        expect(errorObj).toEqual( {
            status: 400,
            message: "Random Error"
          });
    });
});
