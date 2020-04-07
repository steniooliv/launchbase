/*
    DESAFIO 1-1

    - CALCULO DE IMC

    - CALCULO DE APOSENTADORIA

    - https://github.com/steniooliv/launchbase

*/

// CALCULO DE IMC
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