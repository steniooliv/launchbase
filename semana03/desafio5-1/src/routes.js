const express = require("express");
const main = require("../src/app/controllers/main");
const recipes = require("../src/app/controllers/recipes");
const routes = express.Router();

routes.get("/", main.index);
routes.get("/about", main.about);
routes.get("/recipes", main.recipes);
routes.get("/recipes/:index", main.recipesIndex);

// routes.get("/admin/recipes", recipes.index);
// routes.get("/admin/recipes/create", recipes.create);
// routes.get("/admin/recipes/:id", recipes.show);
// routes.get("/admin/recipes/:id/edit", recipes.edit);

// routes.post("/admin/recipes", recipes.post);
// routes.put("/admin/recipes", recipes.put);
// routes.delete("/admin/recipes", recipes.delete);

module.exports = routes;