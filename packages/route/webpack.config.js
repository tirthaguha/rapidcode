const path = require("path");

module.exports = {
  entry: "./lib/route.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "route.js",
    library: {
      type: "commonjs2",
    },
  },
  externals: {
    express: "express",
  },
  mode: "development",
};
