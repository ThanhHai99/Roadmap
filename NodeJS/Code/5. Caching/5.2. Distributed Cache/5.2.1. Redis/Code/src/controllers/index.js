import userController from "./userController";
import newsController from "./newsController";
import homeController from "./homeController";
import authController from "./authController";

module.exports = {
  auth: authController,
  user: userController,
  news: newsController,
  home: homeController
}
