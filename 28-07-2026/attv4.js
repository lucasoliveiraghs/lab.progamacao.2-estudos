let soma = 0;
let pessoas = 0;
let idade = Number(prompt("digite a idade (0 ou negativo para finalizar)"));

while(idade > 0){
    soma = soma + idade;
    pessoas++
    idade = Number(prompt("digite outra idade (0 ou negativo para finalizar)"))
}

if (pessoas > 0){
    let media = soma / pessoas;
    console.log("A média das idades é: " +media);
}else{
    console.log("nenhuma idade válida foi digitada");
}

