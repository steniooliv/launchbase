const currentPage = location.pathname;
const menuItems = document.querySelectorAll(".content-admin header nav a");

const formDelete = document.querySelector("#form-delete");

const ingredients = document.querySelector(".ingredients");
const preparations = document.querySelector(".preparations");

if (menuItems) {
  for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
      item.classList.add("active");
    }
  }
}

if (formDelete) {
  formDelete.addEventListener("submit", function(event) {
    const confirmation = confirm("Deseja Deletar?");
    if (!confirmation) {
      event.preventDefault();
    }
  });
}

if (ingredients) {
  function addIngredient() {

    const fieldContainer = document.querySelectorAll(".ingredient");
  
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    if (newField.children[0].value == "") return false;
  
    newField.children[0].value = "";
    ingredients.appendChild(newField);
  }
  
  document.querySelector(".add-ingredient").addEventListener("click",addIngredient);
}

if (preparations) {
  function addPreparation() {
    const preparations = document.querySelector(".preparations");
    const fieldContainer = document.querySelectorAll(".preparation");
  
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    if (newField.children[0].value == "") return false;
  
    newField.children[0].value = "";
    preparations.appendChild(newField);
  }
  
  document.querySelector(".add-prepare").addEventListener("click",addPreparation);
}

