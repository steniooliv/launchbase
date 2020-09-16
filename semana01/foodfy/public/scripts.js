const hide = document.querySelectorAll(".hide");
const info = document.querySelectorAll(".info");
const card = document.querySelectorAll(".card");
const currentPage = location.pathname;
const menuItems = document.querySelectorAll(".content header nav a");

if (menuItems) {
  for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
      item.classList.add("active");
    }
  }
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

  const ingredients = document.querySelector(".ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");

  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  if (newField.children[0].value == "") return false;

  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document.querySelector(".add-ingredient").addEventListener("click",addIngredient);

// add prepare

function addPreparation() {
  const preparations = document.querySelector(".preparations");
  const fieldContainer = document.querySelectorAll(".preparation");

  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  if (newField.children[0].value == "") return false;

  newField.children[0].value = "";
  preparations.appendChild(newField);
}

document.querySelector(".add-prepare").addEventListener("click",addPreparation);