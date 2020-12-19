import express from "express";
import http from "http";
import https from "https";
import pem from "pem";
import events from "events";
import configRoutes from "./routes/web";

pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
  if (err) {
    throw err
  }
  let app = express()
  let server = http.createServer(app);

  //Set max connection event listener
  events.EventEmitter.defaultMaxListeners = 100;
  configRoutes(app);

  let PORT = process.env.PORT || process.env.APP_PORT || 1999;
  https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(PORT, () =>
    console.log(`App running at : ${PORT}`)
  );
});
