import session, { MemoryStore } from "express-session";
import connectMongo from "connect-mongo";
import * as configApp from "./../config/app"
import { v4 as uuidv4 } from "uuid";

/**
 * Config session for app
 * @param app from exactly express module
 */

// Save to DB store
let MongoStore = connectMongo(session);

let sessionStore = new MongoStore({
	url: configApp.app.DB_URI,
	autoReconnect: true,
	autoRemove: "native"
});

let config = (app) => {
	app.use(
		session({
			key: configApp.app.SESSION_KEY,
			secret: configApp.app.SESSION_SECRET,
			store: sessionStore, // DB store
			resave: false,
			saveUninitialized: false,
			cookie: {
				maxAge: 1000 * 60 * 60 * 12 // milisecond = 12 hours
			}
		})
	);
};	

// 	let config = (app) => {
// 		app.set("trust proxy", 1);
// 		app.use(
// 			session({
// 				genid: () => uuidv4() ,
// 				secret: configApp.app.SESSION_SECRET,
// 				store: MemoryStore, // RAM
// 				resave: false,
// 				saveUninitialized: false,
// 				cookie: {
// 					secure: true
// 				}
// 			})
// 		);
// 	};

module.exports = {
	config,
	sessionStore
};

// Save to server's RAM
