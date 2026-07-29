
let maior = Number(prompt("Digite o 1º valor:"));
let menor = maior;

for (let i = 1; i < 10; i++) {
  let valor = Number(prompt("Digite outro valor:"));
  if (valor > maior) maior = valor;
  if (valor < menor) menor = valor;
}

console.log("Maior valor: " + maior);
console.log("Menor valor: " + menor);

 