/*Atividade - Faça um programa que crie e leia 5 valores de preços de produtos de uma loja. Após a leitura desses valores, percorra o vetor e imprima a soma de valores desses produtos. Além disso, imprima também o índice onde está o produto mais caro.*/

const v = [];
const tamanho = 5;
let soma = 0;
let indice = 0;


for(let i = 0 ; i < tamanho; i ++){

    let preco = (Number(prompt(`Digite o valor do ${i}º produto `)));
    v.push(preco);

}

let maiorpre = v[0];

for(let i = 0; i < tamanho; i ++){
    soma += v[i]

    if(v[i] > maiorpre) {
        maiorpre = v[i];
        indice = i;
    }
}

console.log(`A soma dos valores é ${soma}`);
console.log(`O índice do produto mais caro é ${indice} com o valor de ${maiorpre} `);




