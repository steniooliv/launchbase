const express = require("express");

const recipes = require("./app/controllers/recipes");
const adminRecipes = require("./app/controllers/adminRecipes");
const adminChefs = require("./app/controllers/adminChefs");

const routes = express.Router();

routes.get("/", recipes.index);
routes.get("/about", recipes.about);
routes.get("/recipes", recipes.recipes);
routes.get("/recipes/:index", recipes.recipesIndex);
routes.get("/recipes/search", recipes.search);
routes.get("/chefs", recipes.chefs);
routes.get("/search", recipes.search);

routes.get("/admin/recipes", adminRecipes.index);
routes.get("/admin/recipes/create", adminRecipes.create);
routes.get("/admin/recipes/:id", adminRecipes.show);
// routes.get("/admin/recipes/:id/edit", adminRecipes.edit);

routes.post("/admin/recipes", adminRecipes.post);
// routes.put("/admin/recipes", adminRecipes.put);
// routes.delete("/admin/recipes", adminRecipes.delete);

routes.get("/admin/chefs", adminChefs.index);
routes.get("/admin/chefs/create", adminChefs.create);
routes.get("/admin/chefs/:id", adminChefs.show);
routes.get("/admin/chefs/:id/edit", adminChefs.edit);

routes.post("/admin/chefs", adminChefs.post);
routes.put("/admin/chefs", adminChefs.put);
routes.delete("/admin/chefs", adminChefs.delete);


module.exports = routes;