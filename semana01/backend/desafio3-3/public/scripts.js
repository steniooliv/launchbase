const cards = document.querySelectorAll(".card");

//ao clicar em um card abrir o modal referente a ele minimizado
for (let card of cards){
  const pageId = card.getAttribute("id");
  card.addEventListener("click", function(){
    window.location.href = `courses/${pageId}`;
  })
}