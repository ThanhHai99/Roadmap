import express from "express";
import http from "http";
import configRoutes from "./routes/web";
import configViewEngine from "./config/viewEngine";

let app = express();
let server = http.createServer(app);

configRoutes(app);
configViewEngine(app);

let host = "localhost";
let port = process.env.PORT || 1999;
server.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`);
});
