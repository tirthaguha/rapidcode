const { createApp, registerRoute, addMiddleware } = require("@rapidcode/app");
var usersRouter = require("./routes/users");
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const nocache = require('nocache');
const helmet = require('helmet');
const cors = require('cors');

var app = createApp();

addMiddleware(app, morgan('dev'));
addMiddleware(app, cors());
addMiddleware(app, nocache());
addMiddleware(app, helmet());
addMiddleware(app, cookieParser());

registerRoute(app, '/users', usersRouter);

// catch 404 and forward to error handler
addMiddleware(app, (req, res, next) => {
  const { path } = req;
  let err = {
    message: `Path ${path} not Found`,
    status: 404,
  };
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};
  console.log(err);

  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
