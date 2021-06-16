const LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

function Logger() {
  loggerId = "";
  logLevel = LEVELS.silly;

  this.setLoggerId = function (id) {
    this.loggerId = id;
  };

  this.getAllLevels = function () {
    return LEVELS;
  };
  this.setLogLevel = function (level) {
    this.logLevel = level;
  };

  this.log = function (msg, level) {
    switch (level) {
      case LEVELS.error:
        this.error(msg);
        break;
      case LEVELS.warn:
        this.warn(msg);
        break;
      case LEVELS.info:
        this.info(msg);
        break;
      case LEVELS.http:
        this.http(msg);
        break;
      case LEVELS.verbose:
        this.verbose(msg);
        break;
      case LEVELS.debug:
        this.debug(msg);
        break;
      case LEVELS.silly:
        this.silly(msg);
        break;
      default:
        this.verbose(msg);
        break;
    }
  };
  this.error = function (params) {
    console.log(params);
  };
  this.warn = function (params) {
    if (this.logLevel >= LEVELS.warn) {
      console.log(params);
    }
  };
  this.info = function (params) {
    if (this.logLevel >= LEVELS.info) {
      console.log(params);
    }
  };
  this.http = function (params) {
    if (this.logLevel >= LEVELS.http) {
      console.log(params);
    }
  };
  this.verbose = function (params) {
    if (this.logLevel >= LEVELS.verbose) {
      console.log(params);
    }
  };
  this.debug = function (params) {
    if (this.logLevel >= LEVELS.debug) {
      console.log(params);
    }
  };
  this.silly = function (params) {
    if (this.logLevel >= LEVELS.silly) {
      console.log(params);
    }
  };
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
