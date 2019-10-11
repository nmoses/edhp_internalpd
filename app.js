var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static('public')) 

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/project", function(req, res){
    res.render("project");
    console.log("made it!");
});

app.listen(8080, function(){
    console.log("Server has started!");
});