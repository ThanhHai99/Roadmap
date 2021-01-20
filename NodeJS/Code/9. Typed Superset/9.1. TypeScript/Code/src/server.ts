import express from "express";
import http from "http";

let app = express();
let server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Home page !!!");
});

let port = process.env.PORT || 1999;
server.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
