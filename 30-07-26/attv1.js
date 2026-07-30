/*Faça a leitura de 7 valores reais e armazene em um vetor. Use um laço de repetição para somar todos os valores do array e calcular o total das compras. Se o valor total for maior que R$ 300,00, aplique um
desconto de 10% no total final e exiba a mensagem com o valor
recalculado.*/

const v = [];
let soma = 0;
let valor = 0;

for( let i = 1 ; i <= 7; i++){

let valor = Number(prompt("Digite o preço do " + i + "° produto:"));
soma += valor;
}

if( soma > 300){
    let desc = 0;
    let tt = 0;

    desc = (soma * 10) / 100;

    tt = soma - desc;
    
    console.log("O valor total com o desconto a ser pago é de R$ " + tt)

}else{
    console.log("O valor total a ser pago é de R$ " + soma)
}




