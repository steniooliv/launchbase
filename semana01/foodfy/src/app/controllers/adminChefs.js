const AdminChef = require("../models/AdminChef");

module.exports = {

  index(req, res) {
    AdminChef.all(function(chefs) {
      return res.render("admin/chefs/index", {chefs});
    });
  },

  show(req, res) {

    AdminChef.find(req.params.id, function(chef) {
    
      AdminChef.recipesByChef(req.params.id, function(recipes) {
        const totalRecipes = recipes.length;
        
        return res.render('admin/chefs/show', {chef, recipes, totalRecipes});
      });
    });
  },

  create(req, res) {
    return res.render("admin/chefs/create");
  },

  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please fill all fields!");
      }
    }

    AdminChef.post(req.body, function(chef) {
      return res.redirect(`/admin/chefs/${chef.id}`);
    });
  },

  edit(req, res) {
    AdminChef.find(req.params.id, function(chef) {
      if (!chef) return res.send("Chef not found!");

      return res.render("admin/chefs/edit", {chef});
    })
  },

  put(req, res) {
    const keys = Object.keys(req.body);
  
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please fill all fields!");
      }
    }

    console.log(req.body);

    AdminChef.update(req.body, function() {
      return res.redirect(`/admin/chefs/${req.body.id}`);
    });

  },

  delete(req, res) {
    AdminChef.delete(req.body.id, function() {
      return res.redirect("/admin/chefs");
    });
  },
}