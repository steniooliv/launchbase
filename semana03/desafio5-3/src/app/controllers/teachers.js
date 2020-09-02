const { age, date, graduation } = require("../../lib/utils");
const Teacher = require('../models/Teacher');

module.exports = {
  index(req, res) {
    Teacher.all(function(teachers) {
      return res.render('teachers/index', {teachers});
    });
  },

  create(req, res) {
    return res.render('teachers/create');
  },

  show(req, res) {
    Teacher.find(req.params.id, function(teacher) {
      if (!teacher) return res.send('Teacher not found!');

      teacher.age = age(teacher.birth_date);
      teacher.grade = teacher.education_level;
      teacher.classroom = teacher.class_type;
      teacher.courses = teacher.subjects_taught.split(',');
      teacher.created_at = date(teacher.created_at).format;
      
      return res.render('teachers/show', {teacher});
    });
  },

  post(req, res) {
    const keys = Object.keys(req.body);
  
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please fill all fields!");
      }
    }

    Teacher.create(req.body, function(teacher) {
      return res.redirect(`teachers/${teacher.id}`);
    });
  },

  edit(req, res) {
    Teacher.find(req.params.id, function(teacher) {
      if (!teacher) return res.send('Teacher not found!');

      teacher.birth = date(teacher.birth_date).iso;
      teacher.grade = graduation(teacher.education_level);
      teacher.classroom = teacher.class_type;
      teacher.courses = teacher.subjects_taught.split(',');
      
      return res.render('teachers/edit', {teacher});
    });
  },

  update(req, res) {
    Teacher.update(req.body, function() {
      return res.redirect(`teachers/${req.body.id}`);
    });
  },

  delete(req, res) {
    Teacher.delete(req.body.id, function() {
      return res.redirect('teachers');
    })
  }
}