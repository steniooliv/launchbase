const menuItems = document.querySelectorAll(".content-admin header nav a");

const formDelete = document.querySelector("#form-delete");

const ingredients = document.querySelector(".ingredients");
const preparations = document.querySelector(".preparations");

const hide = document.querySelectorAll(".hide");


if (menuItems) {
  const currentPage = location.pathname;
  
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

if (hide) {
  const info = document.querySelectorAll(".info");

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
}
