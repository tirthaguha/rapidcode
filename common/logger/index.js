const { level } = require("../../packages/logger/lib/logger");

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

class Logger {
  loggerId = "";
  logLevel = levels.silly;

  setLoggerId(id) {
    this.loggerId = id;
  }

  getAllLevels() {
    return levels;
  }
  setLogLevel(level) {
    this.logLevel = level;
  }

  log(msg, level) {
    switch (level) {
      case levels.error:
        this.error(msg);
        break;
      case levels.warn:
        this.warn(msg);
        break;
      case levels.info:
        this.info(msg);
        break;
      case levels.http:
        this.http(msg);
        break;
      case levels.verbose:
        this.verbose(msg);
        break;
      case levels.debug:
        this.debug(msg);
        break;
      case levels.silly:
        this.silly(msg);
        break;
      default:
        this.verbose(msg);
        break;
    }
  }
  error(params) {
    console.log(params);
  }
  warn(params) {
    if (this.logLevel >= levels.warn) {
      console.log(params);
    }
  }
  info(params) {
    if (this.logLevel >= levels.info) {
      console.log(params);
    }
  }
  http(params) {
    if (this.logLevel >= levels.http) {
      console.log(params);
    }
  }
  verbose(params) {
    if (this.logLevel >= levels.verbose) {
      console.log(params);
    }
  }
  debug(params) {
    if (this.logLevel >= levels.debug) {
      console.log(params);
    }
  }
  silly(params) {
    if (this.logLevel >= levels.silly) {
      console.log(params);
    }
  }
}

function randomString(length, chars) {
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

const createLogger = () => {
  const rString = randomString(
    8,
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
  const logger = new Logger();
  logger.setLoggerId(rString);
  return logger;
};

module.exports = createLogger;

// const logger = createLogger();
// logger.setLogLevel(logger.getAllLevels().silly);
// logger.log("Hello World");

// const logger_two = createLogger();
// logger_two.setLogLevel(logger_two.getAllLevels().warn);
// logger_two.log("Hello World");
