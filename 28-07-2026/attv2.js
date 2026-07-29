let familia = Number(prompt("quantas pessoas tem na sua familia: "));
let salario;
let total =0;

for(let i = 1; i <= familia; i++ ){
    
    let salario = Number(prompt("Quanto é o salário deste membro:" ));

    total = total + salario;
}

console.log("o total da soma de todos os salários é: " + total)