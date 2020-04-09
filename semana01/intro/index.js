const classA = [
  {
    name: "Stenio",
    grade: 9.8,
  },

  {
    name: "Marcos",
    grade: 10,
  },

  {
    name: "Igor",
    grade: 2,

  },
  {
    name: "Thiago",
    grade: 10,
  },
]

const classB = [
  {
    name: "Mateus",
    grade: 7.5,
  },

  {
    name: "Isadora",
    grade: 7,
  },

  {
    name: "Lucas",
    grade: 4,
  },

  {
    name: "Novo Aluno",
    grade: 5,
  },
]

function calculateAverage(students) {
  let sum = 0;

  for (let i = 0; i < students.length; i++) {

    sum = sum + students[i].grade;

  }

  const average = sum / students.length;

  return average;
}


function sendMessage(average, classroom) {
  if (average > 5) {

    console.log(`${classroom} average: ${average}. Congratulations!`);

  }
  else {

    console.log(`${classroom} average: ${average}. It´s not good!`);

  }
}


function setFlunked(student) {
  student.flunked = false;

  if (student.grade < 5) {

    student.flunked = true;

  }

}


function sendFlunkedMessage(student) {

  if (student.flunked) {

    console.log(`${student.name} is flunked.`);

  }
}


function studentsFlunked(students) {
  for (let student of students) {

    setFlunked(student);
    sendFlunkedMessage(student);

  }
}


const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, "Class A");
sendMessage(average2, "Class B");

studentsFlunked(classA);
studentsFlunked(classB);