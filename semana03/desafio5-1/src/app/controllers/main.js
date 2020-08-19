const Main = require('../models/Main');

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  about(req, res) {
    return res.render("about");
  },

  recipes(req, res) {
    return res.render("recipes");
  },

  recipesIndex(req, res) {
    return res.render("details");
  },
}