let i = 1;
let maior = Number(prompt("Digite o 1º valor:"));
let menor = maiorW;

while (i < 10) {
  let valor = Number(prompt("Digite outro valor:"));
  if (valor > maior) maior = valor;
  if (valor < menor) menor = valor;
  contador++;
}

console.log(" Maior valor: " + maior);
console.log("Menor valor: " + menor);