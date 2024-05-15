const express = require("express");
const { getAllPlanets } = require("./planets.controller");

const planetsRouter = express.Router();

planetsRouter.route("/planets").get(getAllPlanets);

module.exports = planetsRouter;
