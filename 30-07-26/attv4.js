/*Faça um algoritmo que peça como entrada uma lista de 5 produtos que o usuário deve comprar no mercado. Em seguida, faça uma repetição
que peça ao usuário para digitar o nome do produto e verifique se esse produto está ou não na lista (Emita uma mensagem no console com
essa informação). Caso o usuário digite “sair” o programa deve
encerrar.*/

const lista = []

for( i = 1; i <=5; i++){
    let produto = prompt("digite o " + i + "º produto da lista");
    lista.push(produto)
}

let busca = "";

while (busca !== "sair"){
    busca = prompt("Digite um produto para conferir se está na lista ( ou digite 'sair' para encerrar o programa" 
    );

    if(busca === "sair"){
        console.log("programa encerrado");
    }
    else if ( lista.includes(busca)){
        console.log("O produto '" + busca + "' Está na lista de compras");
    }
    else{
        console.log("O produto '" + busca + "' Não está na lista de compras");
    }
    }