const express = require("express");
let { get, put, post, remove } = require("./../controllers/index");

let router = express.Router();

let configRoutes = (app) => {
    app.get("/", function(req, res) {
        return res.redirect("/movies");
    });
    
    router.get('/', function(req, res) {
       get.getAll 
    });
    
    router.get("/:title", function(req, res) {
        get.getByTitle
    });
    
    router.put("/:title", function(req, res) {
        put.put
    });
    
    router.delete("/:title", function(req, res) {
        remove.remove
    });
    
    
    router.post("/", function(req, res) {
        post.post
    });
    return app.use("/movies", router);
};

module.exports = configRoutes;
