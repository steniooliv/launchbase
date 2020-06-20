exports.index = function(req, res) {
  return res.render("admin/recipes/index");
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