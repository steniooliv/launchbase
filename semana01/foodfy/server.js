const express = require("express");
const nunjucks = require("nunjucks");
const data = require("./data");


const server = express();
server.use(express.static("public"));
server.use(express.static("assets"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get("/", function(req, res) {
  return res.render("index", {data});
});

server.get("/about", function(req, res) {
  return res.render("about");
});

server.get("/recipes", function(req, res) {
  return res.render("recipes", {data});
});

server.get("/recipes/:index", function (req, res) {
  const recipes = data; // Array de receitas carregadas do data.js
  const recipeIndex = req.params.index;
  
  return res.render("details", {recipes: recipes[recipeIndex]});
});


server.listen(5000, function() {
  console.log("server is running");
});
