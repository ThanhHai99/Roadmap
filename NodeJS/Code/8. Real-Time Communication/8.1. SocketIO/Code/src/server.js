import express from "express";
import configRoutes from "./routes/web";
import http from "http";
import socketio from "socket.io";
import configViewEngine from "./config/viewEngine";
import bodyParser from "body-parser";
import initSockets from "./sockets/index";
// import configSocket from "./config/socketio";

//Init app
const app = express();

let server = http.createServer(app);
let io = socketio(server);

configViewEngine(app);

configRoutes(app);

initSockets(io); // server

const PORT = process.env.PORT || process.env.APP_PORT || 1999;
server.listen(PORT, () =>
  console.log(`App running at : ${PORT}`)
);
