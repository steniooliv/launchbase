const Instructor = require('../models/Instructor');

module.exports = {
  index(req, res) {
    Instructor.all(function(instructors) {
      return res.render("instructors/index", {instructors});
    });
  },

  show(req, res) {

    return

  },

  create(req, res) {

    return res.render("instructors/create");

  },

  post(req, res) {
    const keys = Object.keys(req.body);
  
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please fill all fields!");
      }
    }

    Instructor.post(req.body,function(instructor) {
      return res.redirect(`/instructors/${instructor.id}`);
    });
  },

  edit(req, res) {

    return

  },

  put(req, res) {
    const keys = Object.keys(req.body);
  
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please fill all fields!");
      }
    }

    let {avatar, name, birth, gender, services} = req.body;
    
    return

  },

  delete(req, res) {

    return

  },

}