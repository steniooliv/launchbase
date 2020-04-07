/*====================================

  OPERADORES DE COMPARAÇÃO
	
	>        MAIOR
	<        MENOR
	>=       MAIOR IGUAL A
	<=       MENOR IGUAL A
	==       IGUAL A
	===      IGUAL E DO MESMO TIPO
	!=       DIFERENTE DE
  !==      DIFERENTE E DO MESMO TIPO

====================================*/

// DESAFIO 1
//
// verificar se a pessoa é maior que 18 anos
// se sim, deixar entrar, senão, bloquear entrada
// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos

const idade = 17;

if (idade >= 18) {
  console.log('Deixar entrar');
} 
else {
  console.log('Bloquear entrada');
}

if (idade == 17) {
  console.log('Voltar quando fizer 18 anos')
}

/*====================================

  OPERADORES LÓGICOS

  &&    "E" As duas condições deve ser verdadeiras
         para que a condição final seja verdadeira
  
  ||    "OU" Uma das condições deve ser verdadeira
         para que a condição final seja verdadeira

  !     "NÃO" Nega uma condição

====================================*/

// DESAFIO 2
//
// dar bonificação de 500 reais
// se vendedor possui 100 ou menos pontos
// mas deve possuir mais de 50 pontos

const pontos = 51;

if (pontos <= 100 && pontos > 50) {
  console.log("Bonificação de 500 reais")
} 
else {
  console.log("Sem bonificação")
}

/*====================================

  OPERADORES ARITMÉTICOS

  *   Multiplicação
  /   Divisão
  %   Resto da divisão
  +   Adição
  -   Subtração

====================================*/

console.log(2 * 2);   // 4
console.log(2 / 2);   // 1
console.log(2 % 1,5); // 0.5
console.log(2 + 2);   // 4
console.log(2 - 2);   // 0