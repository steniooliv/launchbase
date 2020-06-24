const fs = require("fs");
const data = require("../data.json");

exports.index = function(req, res) {
  return res.render("admin/recipes/index", {recipes: data.recipes});
}

exports.show = function(req, res) {
  return res.render("admin/recipes/show");
}

exports.create = function(req, res) {
  return res.render("admin/recipes/create");
}

exports.edit = function(req, res) {
  return res.render("admin/recipes/edit");
}