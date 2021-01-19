const express = require("express");
const configRoutes = require("./routes/web");
const http = require("http");
const logger = require("morgan");

const app = express();
let server = http.createServer(app);
app.use(logger("dev"));
configRoutes(app);

const host = "localhost";
const port = process.env.PORT || 1999;
server.listen(port, host,() =>
  console.log(`App running at ${host}:${port}`)
);
