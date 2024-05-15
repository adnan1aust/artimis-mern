const http = require("http");
const colors = require("colors");
const app = require("./app");
const { loadPlanetData } = require("./models/planets.model");
require("dotenv").config();

//separating server code from express code for websocket
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

const startServer = async () => {
  await loadPlanetData();
  server.listen(PORT, () => {
    console.log(`SEVER RUNNING ON PORT- ${PORT}`.white.bold);
  });
};

startServer();
