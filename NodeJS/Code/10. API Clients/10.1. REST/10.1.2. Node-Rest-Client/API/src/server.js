const express = require("express");
const http = require("http");
const configRoute = require("./routes/web");

const app = express();

configRoute(app);

const server = http.createServer(app);

server.listen(2000, () => {
  console.log("Server running at port 2000");
});
