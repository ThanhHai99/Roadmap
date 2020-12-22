import express from "express";
import ConnectDB from "./config/sqlServer";
import configRoutes from "./routes/web";
import http from "http";

//Init app
const app = express();

let server = http.createServer(app);

ConnectDB();

configRoutes(app);

const PORT = process.env.PORT || process.env.APP_PORT || 1999;
server.listen(PORT, () =>
  console.log(`App running at : ${PORT}`)
);

