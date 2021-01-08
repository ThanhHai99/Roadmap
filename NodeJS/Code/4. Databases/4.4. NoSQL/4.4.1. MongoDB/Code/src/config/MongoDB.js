import mongoose, { mongo } from "mongoose";
import bluebird from "bluebird";
import { MongoClient } from "mongodb";

// Connect to MongoDB
let MongoDB = () => {
	mongoose.Promise = bluebird;
	let URI = "mongodb://localhost:27017/nodejs";

	if (MongoClient.connected) {
		console.log("Connect to MongoDB failure.");
	} else {
		console.log("Connect to MongoDB successful");
	}
	
	return mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = MongoDB;
