// vamos armazenar o modal overlay numa constante
const modalOverlay = document.querySelector('.modal-overlay');

// aqui vamos armazenar todos os card dentro da constante cards
const cards = document.querySelectorAll('.card');

// armazenar a classe do botão fechar na constante
const closeModal = document.querySelector('.close-modal');


// para criar uma link em todos os cards, vamos usar um for para
// percorrer todos eles, vamos aplicar um medoto para que cada card
// escute um click e execute uma função quando o objeto for clicado
//
// vamos executar a fução para ativar a classe active no objeto
// modalOverlay

for (let card of cards) {
  card.addEventListener("click",
  function() {
    const videoId = card.getAttribute("id");
    window.location.href = `/video?id=${videoId}`;
  })
}



