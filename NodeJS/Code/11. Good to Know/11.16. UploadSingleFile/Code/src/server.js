import express from "express";
import http from "http";
import configRoutes from "./routes/web";
import configViewEngine from "./config/viewEngine";

const app = express();
const server = http.createServer(app);

configRoutes(app);
configViewEngine(app);

let host = "localhost";
let port = process.env.PORT || 1999;

server.listen(port, host, () => {
  console.log(`Hello Trung Quan, I'm running at ${host}:${port}/`);
});