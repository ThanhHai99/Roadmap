const express = require("express");

const routes = express.Router();

const configRoutes = (app) => {
  routes.get("/", (req, res) => {
    console.log("Home page");
    return res.send("Home page");
  });

  app.use("/", routes);
}

module.exports = configRoutes;
