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
