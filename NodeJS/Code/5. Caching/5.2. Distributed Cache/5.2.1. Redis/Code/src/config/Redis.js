import redis from "redis";
import { promisifyAll } from "bluebird";

promisifyAll(redis);

// Connect to Redis
let Redis = () => {
	let client = redis.createClient({
		host: "127.0.0.1",
		port: 6379,
	});

	client['auth'] = null;

	if (client.connected) {
		console.log("Connect to Redis failure.");
	} else {
		console.log("Connect to Redis successful");
	}
	
	return client;
};

module.exports = Redis;
