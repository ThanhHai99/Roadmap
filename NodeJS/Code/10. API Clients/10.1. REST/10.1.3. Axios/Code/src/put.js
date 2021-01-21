var Client = require('node-rest-client').Client; 

// direct way
var client = new Client();
 
var args = {
    path: { "id": 120 },
    parameters: { arg1: "hello", arg2: "world" },
    headers: { "test-header": "client-api" },
    data: "<xml><arg1>hello</arg1><arg2>world</arg2></xml>",
    requestConfig: {
      timeout: 1000, //request timeout (milliseconds)
      noDelay: true, //Enable/disable the Nagle algorithm
      keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
      keepAliveDelay: 1000, //and optionally set the initial delay before the first keepalive probe is sent
      followRedirects: true,
      maxRedirects: 10
    },
    responseConfig: {
      timeout: 1000 //response timeout
    }
};
 
client.put("http://localhost:2000/put/${id}", args, function (data, response) {
    // parsed response body as js object
    console.log("method readdy: ");
    console.log(data);
    // raw response
    // console.log(response);
});
 
// registering remote methods
client.registerMethod("xmlMethod", "http://localhost:2000/put/${id}", "PUT");
 
client.methods.xmlMethod(args, function (data, response) {
    // parsed response body as js object
    console.log("method registered: ");
    console.log(data);
    // raw response
    // console.log(response);
});
 
// posted data can be js object
var args_js = {
    path: { "id": 120 },
    parameters: { arg1: "hello", arg2: "world" },
    headers: { "test-header": "client-api" },
    data: { "arg1": "hello", "arg2": 123 }
};
 
client.methods.xmlMethod(args_js, function (data, response) {
    // parsed response body as js object
    console.log("method parsed: ");
    console.log(data);
    // raw response
    // console.log(response);
});

