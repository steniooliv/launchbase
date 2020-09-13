
exports.index = function(req, res) {
  return res.render("recipes/index");
}

exports.about = function(req, res) {
  return res.render("recipes/about");
}

exports.recipes = function(req, res) {
  return res.render("recipes/recipes");
}

exports.recipesIndex = function (req, res) {
  // const recipes = data;
  // const recipeIndex = req.params.index;
  
  return res.render("recipes/details");
}