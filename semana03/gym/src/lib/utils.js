module.exports = {

  age(timestamp) {
    const today = new Date();
    const birthDate = new Date(timestamp);

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    
    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
      age = age - 1;
    }

    return age;
  },

  date(timestamp) {
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
    };
  },

  blood: function(blood) {
    let bloodType = "";

    if (blood == "A1") {
      return bloodType = "A+";
    } else
    if (blood == "A0") {
      return bloodType = "A-";
    } else
    if (blood == "B1") {
      return bloodType = "B+";
    } else
    if (blood == "B0") {
      return bloodType = "B-";
    } else
    if (blood == "AB1") {
      return bloodType = "AB+";
    } else
    if (blood == "AB0") {
      return bloodType = "AB-";
    } else
    if (blood == "O1") {
      return bloodType = "O+";
    } else
    {
      return bloodType = "O-";
    }

    return false;

  }
  
}