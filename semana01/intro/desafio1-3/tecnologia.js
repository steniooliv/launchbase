//
//  BUSCAR TECNOLOGIA CSS NOS USUÁRIOS
//

const usuarios = [
  {
    nome: "Carlos",
    tecnologias: ["HTML", "CSS"]
  },
  
  {
    nome: "Jasmine",
    tecnologias: ["JavaScript", "CSS"]
  },

  {
    nome: "Tuane",
    tecnologias: ["HTML", "Node.js"]
  },
];

// Função para percorrer o array de tecnologias, quando localizar a tecnologia CSS retorna um valor true
function checaSeUsuarioUsaCSS(usuario) {
  for (let i = 0; i < usuario.tecnologias.length; i++) {
    
    if (usuario.tecnologias[i] === "CSS") {
      return true;
    }

  }
}

// FOR para percorrer todos os usuários e passar os usuários como parametro da função anterior
// O valor retornado da função anterior será armazenado na variavel usuarioTrablahaComCSS
// O IF a seguir vai verificar se a variável tem valor de true e se tiver vai imprimir o nome do usuário
// e que ele trabalha com CSS

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }

}