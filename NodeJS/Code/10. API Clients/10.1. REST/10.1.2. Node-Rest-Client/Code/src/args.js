var Client = require('node-rest-client').Client;
 
// direct way
var client = new Client();
 
var args = {
    data: { test: "hello" }, // data passed to REST method (only useful in POST, PUT or PATCH methods)
    path: { "id": 120 }, // path substitution var
    parameters: { arg1: "hello", arg2: "world" }, // this is serialized as URL parameters
    headers: { "test-header": "client-api" } // request headers
};
 
 
client.get("http://remote.site/rest/json/${id}/method", args,
    function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        console.log(response);
    });
 
 
// registering remote methods
client.registerMethod("jsonMethod", "http://remote.site/rest/json/${id}/method", "GET");
 
 
/* this would construct the following URL before invocation
 *
 * http://remote.site/rest/json/120/method?arg1=hello&arg2=world
 *
 */
client.methods.jsonMethod(args, function (data, response) {
    // parsed response body as js object
    console.log(data);
    // raw response
    console.log(response);
});
