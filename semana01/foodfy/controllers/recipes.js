const fs = require("fs");
const data = require("../data.json");

exports.index = function(req, res) {
  for (recipe of data.recipes) {
    recipe.id = data.recipes.indexOf(recipe);
  }

  return res.render("admin/recipes/index", {recipes: data.recipes});
}

exports.show = function(req, res) {
  
  for (recipe of data.recipes) {
    recipe.id = data.recipes.indexOf(recipe);
  }

  const {id} = req.params;
  
  const foundRecipe = data.recipes.find(function(recipes) {
    return id == recipes.id;
  });

  if (!foundRecipe) return res.send("Recipe not found!");

  const recipes = {
    ...foundRecipe
  }

  return res.render("admin/recipes/show", {recipes});
}

exports.create = function(req, res) {
  return res.render("admin/recipes/create");
}

exports.edit = function(req, res) {
  for (recipe of data.recipes) {
    recipe.id = data.recipes.indexOf(recipe);
  }

  const {id} = req.params;
  
  const foundRecipe = data.recipes.find(function(recipes) {
    return id == recipes.id;
  });

  if (!foundRecipe) return res.send("Recipe not found!");

  const recipes = {
    ...foundRecipe,
  }

  return res.render("admin/recipes/edit", {recipes});
}

exports.post = function(req, res) {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Fill all fields!");
    }
  }
  
  let id = 0;
  const lastRecipe = Number(data.recipes[data.recipes.length - 1]);
  
  if (lastRecipe) {
    id = lastRecipe.id + 1;
  }
  
  data.recipes.push({
    id,
    ...req.body
  });


  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if (err) return res.send("Write file error!");
    return res.redirect("/admin/recipes");
  })

}