// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do calculo da média.

const alunosTurmaA = [
  {
    nome: "Stenio",
    nota: 9.8,
  },

  {
    nome: "Marcos",
    nota: 10,
  },

  {
    nome: "Igor",
    nota: 2,
  },
  {
    nome: "Thiago",
    nota: 10,
  }
]

const alunosTurmaB = [
  {
    nome: "Mateus",
    nota: 7.5,
  },

  {
    nome: "Isadora",
    nota: 7,
  },

  {
    nome: "Lucas",
    nota: 4,
  },

  {
    nome: "Novo Aluno",
    nota: 5,
  }
]

function calculaMedia(alunos) {

  let soma = 0;
  
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota;
  }

  const media = soma / alunos.length;
  return media;
}

const media1 = calculaMedia(alunosTurmaA);
const media2 = calculaMedia(alunosTurmaB);

function enviaMensagem(media, turma) {
  //Se a média for maior que 5, parabenizar a turma
  if (media > 5) {
  
    console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
  }
  else {
    
    console.log(`A média da ${turma} é menor que 5.`)
  }
}

enviaMensagem(media1, "Turma A");
enviaMensagem(media2, "Turma B");


// Marcar aluno como reprovado se anota
// for menor que 5
// e enviar uma mensagem



function marcarComoReprovado(aluno) {
  aluno.reprovado = false;

  if (aluno.nota < 5) {
    aluno.reprovado = true;
  }

}

function enviarMensagemReprovado(aluno) {

  if (aluno.reprovado) {
    console.log(`O aluno ${aluno.nome} está reprovado.`)
  }
}

function alunoReprovado(alunos) {
  for (let aluno of alunos) {

    marcarComoReprovado(aluno);
    enviarMensagemReprovado(aluno);

  }
}

alunoReprovado(alunosTurmaA);
alunoReprovado(alunosTurmaB);