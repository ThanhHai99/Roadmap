import memjs from "memjs";
import { promisifyAll } from "bluebird";

promisifyAll(memjs);

// Connect to Memcached
let Memcached = () => {
	let client = memjs.Client.create("127.0.0.1:11211", {
		username: "",
		password: "",
	});

	if (client.connected) {
		console.log("Connect to Memcached failure.");
	} else {
		console.log("Connect to Memcached successful");
	}
	
	return client;
};

module.exports = Memcached;
