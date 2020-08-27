const {age, date, grade} = require("../../lib/utils");
const Intl = require("intl");

exports.index = function(req, res) {

  return res.render("students/index");
}

exports.create = function(req, res) {
  return res.render("students/create");
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
  const foundStudent = data.students.find(function(student){
    return id == student.id;
  })

  if (!foundStudent) return res.send("Student not found!")

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth).birthDay,
    grade: grade(foundStudent.grade),
  }

  return res.render("students/show" );
}

exports.edit = function(req, res) {

  const {id} = req.params;
  const foundStudent = data.students.find(function(student){
    return id == student.id;
  })

  if (!foundStudent) return res.send("Student not found!")

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth).iso,
  }

  return res.render("students/edit");
}

exports.update = function(req, res) {
  const {id} = req.body;
  let index = 0;

  const foundStudent = data.students.find(function(student, foundIndex) {
    if (id == student.id) {
      index = foundIndex;
      return true
    }
  })

  if (!foundStudent) return res.send("Student not found!")

  const student = {
    ...foundStudent,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id),
    courses: String(req.body.courses),
  }

  return 

}

exports.delete = function(req, res) {
  const {id} = req.body;

  const filteredStudents = data.students.filter(function(student){
    return student.id != id;
  })

  return


}