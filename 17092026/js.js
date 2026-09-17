
function soma(a, b){
    let resultadosoma = a + b;
    return resultadosoma
}

function subtrai(a, b){
    let resultadosubtrai = a - b;
    return resultadosubtrai
}

function multiplica(a, b){
    let resultadomultiplica = a * b;
    return resultadomultiplica
}

function mostraresult(valor){
    alert(`O resultado do cálculo é: ${valor}`)
}

let operacao = Number(prompt(`Digite a operação \n1 -Soma \n2-Subtração \n3-Multiplicação \n5-erro`))

let n1, n2, result;

if(operacao >= 1 && operacao < 4){
    n1 = Number(prompt("Digite o número 1"))
    n2 = Number(prompt("Digite o número 2"))
}

switch(operacao){
    case 1:
         result = soma(n1, n2)
         break;

    case 2:
         result = subtrai(n1, n2)
         break;

    case 3: 
        result = multiplica(n1, n2)
        break;
}

if(operacao == 5){
    alert("programa encerrado")
}else if(operacao !== 1 && operacao !== 2 && operacao !== 3 && operacao !== 5){
    alert("Comando não identificado")
}else{
    mostraresult(result)
}
    

