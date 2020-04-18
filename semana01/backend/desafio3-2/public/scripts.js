const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const close = document.querySelector(".close");
const maxi = document.querySelector(".maxi");
const modal = modalOverlay.querySelector(".modal");

//ao clicar em um card abrir o modal referente a ele minimizado
for (let card of cards){
  const pageId = card.getAttribute("id");
  card.addEventListener("click", function(){
    modal.classList.remove("maximize");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pageId}`;

  })
}

//ao clicar no botão fechar, fechar o modal
close.addEventListener("click", function(){
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("iframe").src = "";
})

//ao clicar no botão maximizar, maximizar ou minizar o modal
maxi.addEventListener("click", function(){
  if (modal.classList.contains("maximize")) {
  modal.classList.remove("maximize")
} else {
  modal.classList.add("maximize")
}
})