//Example POST method invocation
var Client = require('node-rest-client').Client;
var client = new Client();
 
// set content-type header and data as json in args parameter
var args = {
    data: { test: "hello" },
    headers: { "Content-Type": "application/json" }
};
 
client.post("http://localhost:2000/post", args, function (data, response) {
    // parsed response body as js object
    console.log("method readdy: ");
    console.log(data);
    // raw response
    // console.log(response);
});
 
// registering remote methods
client.registerMethod("postMethod", "http://localhost:2000/post", "POST");
 
client.methods.postMethod(args, function (data, response) {
    // parsed response body as js object
    console.log("method registered: ");
    console.log(data);
    // raw response
    // console.log(response);
});
