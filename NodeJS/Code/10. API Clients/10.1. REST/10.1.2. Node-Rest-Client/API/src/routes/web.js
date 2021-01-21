const express = require("express");
const api = require("./../controllers/apiController");

const routers = express.Router();

const configRoute = (app) => {
  routers.get("/get",
    api.getAll
  );

  routers.post("/post",
    api.postAll
  );

  routers.put("/put/:id",
    api.putAll
  );

  app.use("/", routers);
};

module.exports = configRoute;
