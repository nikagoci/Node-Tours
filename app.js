const express = require("express");

const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;