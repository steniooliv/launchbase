const {age, date, graduation} = require("../../lib/utils");
const Intl = require("intl");

module.exports = {
  index(req, res) {
    return res.render('teachers/index');
  },

  create(req, res) {
    return res.render('teachers/create');
  },

  show(req, res) {
    return res.render('teachers/show');
  },

  post(req, res) {
    return
  },

  edit(req, res) {
    return res.render('teachers/edit');
  },

  update(req, res) {
    return res.render('teachers/show');
  },

  delete(req, res) {
    return res.render('teachers/index');
  }

}