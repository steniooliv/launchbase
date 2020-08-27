module.exports = {

  age: function(timestamp) {
    const today = new Date();
    const birthDate = new Date(timestamp);

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    
    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
      age = age - 1;
    }

    return age;
  },

  date: function(timestamp) {
    const date = new Date(timestamp);

    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);

    return {
      day,
      month,
      year,
      birthDay: `${day}/${month}`,
      iso: `${year}-${month}-${day}`,
      format: `${day}/${month}/${year}`,
    }
  },

  graduation: function(graduation) {
    if (graduation == "highSchool") {
      graduation = "Ensino Médio Completo";
    }
    else if (graduation == "graduate") {
      graduation = "Ensino Superior Completo";
    }
    else {
      graduation = "Mestrado e Doutorado";
    }

    return graduation;
  },

  grade: function(grade) {
    if (grade == "5th") {
      grade = "5º Ano Fundamental";
    }
    else if (grade == "6th") {
      grade = "6º Ano Fundamental";
    }
    else if (grade == "7th") {
      grade = "7º Ano Fundamental";
    }
    else if (grade == "8th") {
      grade = "8º Ano Fundamental";
    }
    else if (grade == "9th") {
      grade = "9º Ano Fundamental";
    }
    else if (grade == "1st") {
      grade = "1º Ano Ensino Médio";
    }
    else if (grade == "2nd") {
      grade = "2º Ano Ensino Médio";
    }
    else {
      grade = "3º Ano Ensino Médio";
    }

    return grade;
  }

}
