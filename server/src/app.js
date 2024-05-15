const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");
require("dotenv").config();

const app = express();

//middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(
    morgan(function (tokens, req, res) {
      const apiRoute = [
        `${tokens.method(req, res)}:`,
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, "content-length"),
        "-",
        tokens["response-time"](req, res),
        "ms",
      ].join(" ");
      return apiRoute.cyan;
    })
  );
}

app.use(planetsRouter);

module.exports = app;
