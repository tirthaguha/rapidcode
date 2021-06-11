const path = require("path");
console.log("Here, module loaded");

module.exports = {
  entry: "./lib/app-config.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app-config.js",
    library: {
      type: "commonjs2",
    },
  },
  externals: {
    express: "express",
  },
  mode: "development",
};
