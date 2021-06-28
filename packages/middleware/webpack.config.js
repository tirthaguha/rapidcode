const path = require("path");
console.log("Here, module loaded");

module.exports = {
  entry: "./lib/middleware.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "middleware.js",
    library: {
      type: "commonjs2",
    },
  },
  externals: {
    express: "express",
    "@rapidcode/logger": "@rapidcode/logger",
  },
  mode: "development",
};
