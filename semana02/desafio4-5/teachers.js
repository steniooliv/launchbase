const fs = require("fs");
const data = require("./data.json");
const {age, date, graduation} = require("./utils");
const Intl = require("intl");

//

exports.post = function(req, res) {

  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Fill all fields!")
    }
  }

  let {avatar_url, name, birth, grade, classroom, courses} = req.body;

  birth = Date.parse(req.body.birth);
  created_at = Date.now();
  id = Number(data.teachers.length + 1);

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    grade,
    classroom,
    courses,
    created_at,
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error!")
    return res.redirect("teachers");
  })
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
    courses: foundTeacher.courses.split(","),
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at),

  }

  return res.render("teachers/show", {teacher} );
}

exports.edit = function(req, res) {

  const {id} = req.params;
  const foundTeacher = data.teachers.find(function(teacher){
    return id == teacher.id;
  })

  if (!foundTeacher) return res.send("Teacher not found!")

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth),
    grade: graduation(foundTeacher.grade),

  }

  return res.render("teachers/edit", {teacher});
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
  }

  data.teachers[index] = teacher;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write error!");
    return res.redirect(`/teachers/${id}`);
  })

}

exports.delete = function(req, res) {
  const {id} = req.body;

  const filteredTeachers = data.teachers.filter(function(teacher){
    return teacher.id != id;
  })

  data.teachers = filteredTeachers;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write error!");
    return res.redirect(`/teachers`);
  })


}