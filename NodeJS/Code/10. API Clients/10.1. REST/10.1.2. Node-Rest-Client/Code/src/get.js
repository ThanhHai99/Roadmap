var Client = require('node-rest-client').Client;
 
// direct way
var client = new Client();
 
var args = {
    // path: { "id": 120, "arg1": "hello", "arg2": "world" },	
    headers: { "test-header": "client-api" }
};
 
// client.get("http://localhost:2000/get/${id}/method?arg1=${arg1}&arg2=${arg2}", args,
client.get("http://localhost:2000/get", args,
    function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        // console.log(response);
    });
