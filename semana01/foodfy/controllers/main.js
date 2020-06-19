const data = require("../data");

exports.index = function(req, res) {
  return res.render("index", {data});
}

exports.about = function(req, res) {
  return res.render("about");
}

exports.recipes = function(req, res) {
  return res.render("recipes", {data});
}

exports.recipesIndex = function (req, res) {
  const recipes = data;
  const recipeIndex = req.params.index;
  
  return res.render("details", {recipes: recipes[recipeIndex]});
}