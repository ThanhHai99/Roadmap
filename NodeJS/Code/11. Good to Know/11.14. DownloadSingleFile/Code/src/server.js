import http from "http";
import express from "express";
import configRoutes from "./routes/web";

const app = express();
const server = http.createServer(app);

configRoutes(app);

let host = "localhost";
let post = 1999;
server.listen(post, host, () => {
  console.log(`Server running at ${host}:${post}`);
});
