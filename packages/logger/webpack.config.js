const path = require("path");
console.log("Here, module loaded");

module.exports = {
  entry: "./lib/logger.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "logger.js",
    library: {
      type: "commonjs2",
    },
  },
  externals: {
    express: "express",
  },
  mode: "development",
};
