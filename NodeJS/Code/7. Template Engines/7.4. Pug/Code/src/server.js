import express from "express";
import configRoutes from "./routes/web";
import http from "http";
import configViewEngine from "./config/viewEngine";
import bodyParser from "body-parser";

//Init app
const app = express();

let server = http.createServer(app);

configViewEngine(app);

app.use(bodyParser.urlencoded({urlencoded: true}));

configRoutes(app);

const PORT = process.env.PORT || process.env.APP_PORT || 1999;
server.listen(PORT, () =>
  console.log(`App running at : ${PORT}`)
);
