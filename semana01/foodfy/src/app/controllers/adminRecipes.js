const AdminRecipe = require("../models/AdminRecipe");

module.exports = {
  
  index(req, res) {
    AdminRecipe.all(function(recipes) {
      return res.render("admin/recipes/index", {recipes});
    });
  },

  show(req, res) {
    AdminRecipe.find(req.params.id, function(recipes) {
      
      return res.render("admin/recipes/show", {recipes});
    })
  },

  create(req, res) {
    AdminRecipe.chefSelectOption(function(options) {
      
      return res.render("admin/recipes/create", {chefOptions: options} );
    });
  },

  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Fill all fields!");
      }
    }

    AdminRecipe.post(req.body, function(recipe) {
      return res.redirect(`/admin/recipes/${recipe.id}`);
    });
  },

  edit(req, res) {
    AdminRecipe.find(req.params.id, function(recipes) {
      if (!recipes) return res.send("Recipe not found!");

      AdminRecipe.chefSelectOption(function(options) {

        return res.render("admin/recipes/edit", {recipes, chefOptions: options});
      })
    })
  },

  put(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Fill all fields!");
      }
    }

    AdminRecipe.update(req.body, function(recipe) {
      return res.redirect(`/admin/recipes/${recipe.id}`);
    })
  }


}