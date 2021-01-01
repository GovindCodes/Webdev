var express= require('express');
var app= express();
app.use('view engine', 'ejs');

var bodyParser= require("body-parser");
var mongoose= require("mongoose");
var passport= require("passport");
var passportLocal= require('passport-local');


app.get("/", function(req, res){
    res.render("home");
})