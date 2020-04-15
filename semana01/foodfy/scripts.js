const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const close = document.querySelector('.modal-close');




for (let card of cards) {

  card.addEventListener("click", function() {
    
    //armazenar os dados da imagem do card
    var cardImg = card.getElementsByTagName("img")[0];
    var imgSrc = cardImg.getAttributeNode("src").value;
    var imgAlt = cardImg.getAttributeNode("alt").value;
    
    modalOverlay.classList.add("active");

   //aplicar os dados do card no modal 
    modalOverlay.querySelector("img").src = `${imgSrc}`;
    modalOverlay.querySelector("img").alt = `${imgAlt}`;

    modalOverlay.querySelector(".modal-title").innerHTML = card.querySelector(".img-title").textContent;
    modalOverlay.querySelector(".modal-chef").innerHTML = card.querySelector(".img-chef").textContent;


    

    
  })
}

close.addEventListener("click", function(){
  
  modalOverlay.classList.remove("active");

})
