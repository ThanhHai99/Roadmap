const express = require("express");
let bodyParser = require("body-parser");
const app = express();
const movieRouter = require("./routes/web");

app.use(bodyParser.json({ type: "application/json" }));
movieRouter(app);

app.listen(1999, function() {
    console.log("Server started at: 127.0.0.1:1999");
});
