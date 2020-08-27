const {age, date, graduation} = require("../../lib/utils");
const Intl = require("intl");

exports.index = function(req, res) {

  return res.render("teachers/index");
}

exports.create = function(req, res) {
  return res.render("teachers/create");
}

exports.post = function(req, res) {

  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Fill all fields!")
    }
  }

  return
}

exports.show = function(req, res) {

  const {id} = req.params;
  const foundTeacher = data.teachers.find(function(teacher){
    return id == teacher.id;
  })

  if (!foundTeacher) return res.send("Teacher not found!")

  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    courses: String(foundTeacher.courses).split(","),
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at),

  }

  return res.render("teachers/show");
}

exports.edit = function(req, res) {

  const {id} = req.params;
  const foundTeacher = data.teachers.find(function(teacher){
    return id == teacher.id;
  })

  if (!foundTeacher) return res.send("Teacher not found!")

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth).iso,
    grade: graduation(foundTeacher.grade),

  }

  return res.render("teachers/edit");
}

exports.update = function(req, res) {
  const {id} = req.body;
  let index = 0;

  const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
    if (id == teacher.id) {
      index = foundIndex;
      return true
    }
  })

  if (!foundTeacher) return res.send("Teacher not found!")

  const teacher = {
    ...foundTeacher,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id),
    courses: String(req.body.courses),
  }

  return

}

exports.delete = function(req, res) {
  const {id} = req.body;

  const filteredTeachers = data.teachers.filter(function(teacher){
    return teacher.id != id;
  })

  return


}