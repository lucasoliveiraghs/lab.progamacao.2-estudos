/*Crie um array e faça a leitura com as temperaturas registradas em uma semana. Posteriormente, imprima no console a média de temperatura
daquela semana e a temperatura máxima e mínima.*/

const temperatura = [];
let soma = 0;

for( let i = 1 ; i <= 7; i++){

let graus = Number(prompt("Digite a temperatura do " + i + "° dia:")); 

temperatura.push(graus);
}

for( let i = 0; i < temperatura.length ; i++){

    soma += temperatura[i];
}

    let media = (soma) / 7;

    let max = temperatura[0];
    let min = temperatura[0];

    for(let i = 0; i < temperatura.length; i++){
        if (temperatura[i] > max){
            max = temperatura[i];
        }
        if (temperatura[i] < min){
            min = temperatura[i];
        }
    }

console.log("a temperatura média é: " + media);
console.log("a temperatura máxima é: " + max);
console.log("a temperatura mínima é: " + min);

