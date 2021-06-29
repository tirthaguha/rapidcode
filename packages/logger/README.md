# `@rapidcode/logger`

> Logging for express based applications

## Usage

There is only one API exposed at the moment, `getLogger(loggerName)`;

```javascript
const getLogger = require("@rapidcode/logger");
const logger = getLogger("test-express-app"); //creates a logger, with Console as transport and info as default log level;

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  logger.info("Listening on " + bind);
}
```
