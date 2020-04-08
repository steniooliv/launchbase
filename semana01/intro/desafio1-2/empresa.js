//
//  PROGRAMA PARA ARMAZENAR DADOS DA EMPRESA EM OBJETO
//

const empresa = {
  nome: "Rocketseat",
  cor: "Roxo",
  foco: "Programação",
  endereço: {
    rua: "Rua Guilherme Gembala",
    numero: 260,
  }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`);
