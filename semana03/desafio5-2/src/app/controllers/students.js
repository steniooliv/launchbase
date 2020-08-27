const {age, date, grade} = require("../../lib/utils");

module.exports = {
  index(req, res) {
    return res.render('students/index');
  },

  create(req, res) {
    return res.render('students/create');
  },

  show(req, res) {
    return res.render('students/show');
  },

  post(req, res) {
    return
  },

  edit(req, res) {
    return res.render('students/edit');
  },

  update(req, res) {
    return res.render('students/show');
  },

  delete(req, res) {
    return res.render('students/index');
  }
}