let presenca = 0;

for (let i = 1; i <= 10; i++) {
  let aula = prompt("Aula " + i +": Digite 'P' para Presença ou 'F' para Falta:").toUpperCase();
  if (aula == "P") {
    presenca++;
  }
}

let porcentagem = (presenca / 10) * 100;

console.log("Frequência do aluno: " + porcentagem);

if (porcentagem >= 75) {
  console.log("Condição: APROVADO");
} else {
  console.log("Condição: REPROVADO");
}