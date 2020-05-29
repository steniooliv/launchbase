const fs = require("fs");
const Intl = require('intl');
const data = require("./data.json");
const {age, date} = require("./date")

//index

exports.index = function(req, res) {
  return res.render("instructors/index", {instructors: data.instructors});
}

//show

exports.show = function(req, res) {
  const {id} = req.params;

  const foundInstructor = data.instructors.find(function(instructor){
    return id == instructor.id;
  })

  if (!foundInstructor) return res.send("Instructor not found.");

  const instructor = {
    ...foundInstructor,
    age: age(foundInstructor.birth),
    services: foundInstructor.services.split(","),
    created_at: new Intl.DateTimeFormat('pt-BR').format(foundInstructor.created_at),
  }

  return res.render("instructors/show", {instructor});

}


//create

exports.post = function(req, res) {
  
  const keys = Object.keys(req.body);
  
  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please fill all fields!")
    }
  }

  let {avatar, name, birth, gender, services} = req.body;

  birth = Date.parse(req.body.birth);
  created_at = Date.now();
  id = Number(data.instructors.length + 1);
  
  data.instructors.push({
    id,
    avatar,
    name,
    birth,
    gender,
    services,
    created_at,
  });

  fs.writeFile("./data.json", JSON.stringify(data, null, 2), function(err){
    if (err) return res.send("Write file error!");
    return res.redirect("/instructors");
  })
}

// edit

exports.edit = function(req, res) {
  const {id} = req.params;

  const foundInstructor = data.instructors.find(function(instructor){
    return id == instructor.id;
  })

  if (!foundInstructor) return res.send("Instructor not found.");

  const instructor = {
    ...foundInstructor,
    birth: date(foundInstructor.birth)
  }

  return res.render("instructors/edit", {instructor: instructor});
}

//put

exports.put = function(req, res) {
  const {id} = req.body;
  let index = 0;

  const foundInstructor = data.instructors.find(function(instructor, foundIndex){
    if (id == instructor.id) {
      index = foundIndex;
      return true;
    };
  })

  if (!foundInstructor) return res.send("Instructor not found.");

  
  const instructor = {
    ...foundInstructor,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id),
  }

  data.instructors[index] = instructor;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write error!");
    return res.redirect(`/instructors/${id}`);
  })

}

// delete

exports.delete = function(req, res) {
  const {id} = req.body;

  const filteredInstructors = data.instructors.filter(function(instructor) {
    return instructor.id != id;
  })

  data.instructors = filteredInstructors;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Delete error!");
    return res.redirect("/instructors");
  })

}