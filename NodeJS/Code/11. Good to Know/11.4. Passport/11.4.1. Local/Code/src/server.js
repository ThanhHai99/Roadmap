import express from "express";
import MongoDB from "./config/MongoDB";
import session from "./config/session";
import configRoutes from "./routes/web";
import http from "http";
import configViewEngine from "./config/viewEngine";
import bodyParser from "body-parser";
import passport from "passport";

const app = express();
let server = http.createServer(app);

MongoDB();
session.config(app);

configViewEngine(app);
app.use(bodyParser.urlencoded({urlencoded: true}));

app.use(passport.initialize());
app.use(passport.session());
configRoutes(app);

const PORT = process.env.PORT || process.env.APP_PORT || 1999;
server.listen(PORT, () =>
  console.log(`App running at : ${PORT}`)
);
