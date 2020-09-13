const express = require("express");
const recipes = require("./app/controllers/recipes");
const adminRecipes = require("./app/controllers/adminRecipes");
const routes = express.Router();

routes.get("/", recipes.index);
routes.get("/about", recipes.about);
routes.get("/recipes", recipes.recipes);
routes.get("/recipes/:index", recipes.recipesIndex);

routes.get("/admin/recipes", adminRecipes.index);
routes.get("/admin/recipes/create", adminRecipes.create);
routes.get("/admin/recipes/:id", adminRecipes.show);
routes.get("/admin/recipes/:id/edit", adminRecipes.edit);

routes.post("/admin/recipes", adminRecipes.post);
routes.put("/admin/recipes", adminRecipes.put);
routes.delete("/admin/recipes", adminRecipes.delete);

module.exports = routes;