var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views")
app.use(express.static("./src/public"));
app.listen(1999, () => console.log("Server started"));
app.get("/", (req, res) => {
    res.render("home");
});
