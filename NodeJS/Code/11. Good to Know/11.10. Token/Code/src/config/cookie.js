import cookieParser from "cookie-parser";
import * as configApp from "./app";

/*Config views engine*/
let configCookie = (app) => {
  // app.use(cookieParser(configApp.app.COOKIE_SECRET));
  app.use(cookieParser());
};

module.exports = configCookie;
