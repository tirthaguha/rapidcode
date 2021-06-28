const { createApp } = require("@rapidcode/app");
var usersRouter = require("./routes/users");

var app = createApp();

app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
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
