const hide = document.querySelectorAll(".hide");
const info = document.querySelectorAll(".info");
const card = document.querySelectorAll(".card");


for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function() {
    window.location.href = `/recipes/${i}`;
  })
}

for (let i = 0; i < hide.length; i++) {
  hide[i].addEventListener("click", function() {
    if (hide[i].textContent == "Esconder") {
      hide[i].textContent = "Mostrar";
      info[i].classList.add("off");
    }
    else {
      hide[i].textContent = "Esconder";
      info[i].classList.remove("off");
    }
  })
}

// add ingredient

function addIngredient() {
  const ingredints = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");

  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  if (newField.children[0].value == "") return false;

  newField.children[0].value = "";
  ingredints.appendChild(newField);
}

document.querySelector(".add-ingredient").addEventListener("click",addIngredient);

// add prepare

function addPreparation() {
  const ingredints = document.querySelector("#preparations");
  const fieldContainer = document.querySelectorAll(".preparation");

  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  if (newField.children[0].value == "") return false;

  newField.children[0].value = "";
  ingredints.appendChild(newField);
}

document.querySelector(".add-prepare").addEventListener("click",addPreparation);