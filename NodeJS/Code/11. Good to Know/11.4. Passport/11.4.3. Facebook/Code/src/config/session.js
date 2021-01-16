import session from "express-session";
import connectMongo from "connect-mongo";
import * as configApp from "./app";

let MongoStore = connectMongo(session);

let sessionStore = new MongoStore({
	url: configApp.app.DB_URI,
	autoReconnect: true,
	autoRemove: "native"
});

/**
 * Config session for app
 * @param app from exactly express module
 */

let config = (app) => {
	app.use(
		session({
			key: configApp.app.SESSION_KEY,
  		secret: configApp.app.SESSION_SECRET,
			store: sessionStore,
			resave: true,
			saveUninitialized: false,
			cookie: {
				maxAge: 1000 * 60 * 60 * 12 // milisecond = 12 hours
			}
		})
	);
};

module.exports = {
	config,
	sessionStore
};
