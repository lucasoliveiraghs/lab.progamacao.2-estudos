
let number = Number(prompt("Digíte um número: "));

while(number < 0){
    number = Number(prompt("Digite um número positivo: "));
}

console.log("o número positivo digitado foi " + number);