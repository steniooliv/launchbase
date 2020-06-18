const fs = require("fs");
const data = require("../data.json");
const {age, date, grade} = require("../utils");
const Intl = require("intl");

exports.index = function(req, res) {

  for (let student of data.students) {
    student.grade = grade(student.grade);
  }

  return res.render("students/index", {students: data.students});
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

  birth = Date.parse(req.body.birth);
  
  let id = 1;
  const lastStudent = data.students[data.students.length - 1];

  if (lastStudent) {
    id = lastStudent + 1;
  }

  data.students.push({
    id,
    ...req.body,
    birth,
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error!")
    return res.redirect("students");
  })
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

  return res.render("students/show", {student} );
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

  return res.render("students/edit", {student});
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

  data.students[index] = student;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write error!");
    return res.redirect(`/students/${id}`);
  })

}

exports.delete = function(req, res) {
  const {id} = req.body;

  const filteredStudents = data.students.filter(function(student){
    return student.id != id;
  })

  data.students = filteredStudents;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write error!");
    return res.redirect(`/students`);
  })


}