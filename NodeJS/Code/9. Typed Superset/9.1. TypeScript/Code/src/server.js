"use strict";
exports.__esModule = true;
var express_1 = require("express");
var http_1 = require("http");
var app = express_1["default"]();
var server = http_1["default"].createServer(app);
app.get("/", function (req, res) {
    res.send("Home page !!!");
});
var port = process.env.PORT || 1999;
server.listen(port, function () {
    console.log("Server running at port: " + port);
});
