let tentativas = 0;
let loggin = false;

while (tentativas < 3 && !loggin) {
  let usuario = prompt("Digite o usuário:");
  let senha = prompt("Digite a senha:");

  if (usuario =="aluno" && senha == "iftm123") {
    console.log("Login com sucesso");
    loggin = true;
  } else {
    console.log("tente novamente");
    tentativas++;
    if (tentativas < 3) {
      console.log("Erro de senha ou usuário");
    } else {
      console.log("Bloqueado");
    }
  }
}