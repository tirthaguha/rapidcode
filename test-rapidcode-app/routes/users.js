// var express = require('express');
// var router = express.Router();

const { RouteCreator } = require("@rapidcode/route");
const getLogger = require("@rapidcode/logger");

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });
const logger = getLogger("test-rapidcode-app");

const router = RouteCreator({
  controller: (req, res, next) => {
    logger.info("Responded");
    res.send("respond with a resource");
  },
});

module.exports = router;
