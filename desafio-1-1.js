/*
    DESAFIO 1-1

    - CALCULO DE IMC

    - CALCULO DE APOSENTADORIA

    - https://github.com/steniooliv/launchbase

*/
//
// CALCULO DE IMC
//

console.log("Calculo de IMC:")


const nome = "Stenio";
const peso = 60;
const altura = 1.65;

// Calculo do imc
const imc = peso / (altura * altura);


if ( imc >= 30 ) {

  console.log(`${nome} você está acima do peso.`)
}

else {

  console.log(`${nome} você não está acima do peso.`)
}

//
// CALCULO DE APOSENTADORIA (CALCULO FICTÍCIO)
//

console.log("Calculo de aposentadoria:")

const nome2 = "Stenio";
const sexo = "M";
const idade = 29;
const contribuicao = 13;

// Regra fictícia para aposentadoria
const regra = idade + contribuicao;


if (sexo == "M" && contribuicao >= 35 || sexo == "F" && contribuicao >= 30) {
  
  if (sexo == "M" && regra >= 95 || sexo == "F" && regra >= 85) {

    console.log(`${nome}, você pode se aposentar!`)
  }
  
  else {

    console.log(`${nome}, você ainda não pode se aposentar!`)
  }
}

else {

  console.log(`${nome}, você ainda não pode se aposentar!`)
}