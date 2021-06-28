const path = require("path");

module.exports = {
  entry: "./lib/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
    library: {
      type: "commonjs2",
    },
  },
  externals: {
    express: "express",
  },
  mode: "development",
};
