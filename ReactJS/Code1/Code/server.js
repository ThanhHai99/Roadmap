let bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({extended: false});
let express = require("express");
let app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(1999);

let mang = ["T1", "T2", "T3"];

app.get("/", (req, res) => res.render("trangchu"));
app.get("/1", (req, res) => res.render("baitap1"));
app.get("/2", (req, res) => res.render("baitap2"));
app.get("/3", (req, res) => res.render("baitap3"));
app.get("/4", (req, res) => res.render("baitap4"));
app.get("/5", (req, res) => res.render("baitap5"));
app.get("/note", (req, res) => res.render("Note"));
app.post("/getNotes", (req, res) => res.send(mang));
app.post("/addNote", parser, (req, res) => {
    var newNote = req.body.note;
    mang.unshift(newNote);
    res.send(mang);
});
app.post("/delete", parser, function(req, res) {
    var id = req.body.idXoa;
    mang.splice(id, 1);
    res.send(mang);
});

app.post("/update", parser, function(req, res) {
    var id = req.body.idSua;
    mang[id] = req.body.noiDung;
    res.send(mang);
});
