import express from "express";
import homeController from "../controllers/homeController";
import multipleUploadController from "../controllers/multipleUploadController";

const router = express.Router();

let initRoutes = (app) => {
  // Gọi ra trang home cho việc upload
  router.get("/", homeController.getHome);
  
  // Upload nhiều file với phương thức post
  router.post("/multiple-upload", multipleUploadController.multipleUpload);

  return app.use("/", router);
};

module.exports = initRoutes;
