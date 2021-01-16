import express from "express";
import MongoDB from "./config/MongoDB";
import session from "./config/session";
import configRoutes from "./routes/web";
import configViewEngine from "./config/viewEngine";
import bodyParser from "body-parser";
import configCookie from "./config/cookie";
import passport from "passport";
import https from "https";
import http from "http";
import pem from "pem";

pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
  const app = express();
  // let server = http.createServer(app);
  
  MongoDB();
  session.config(app);
  
  configViewEngine(app);
  app.use(express.json());
  app.use(bodyParser.urlencoded({urlencoded: true}));
  
  app.use(passport.initialize());
  app.use(passport.session());
  configCookie(app);
  configRoutes(app);

  const PORT = process.env.PORT || process.env.APP_PORT || 1999;
  https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(PORT, () =>
    console.log(`App running at : ${PORT}`)
  );
});
