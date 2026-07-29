let i = Number(prompt("digite um número (ou 0 para terminar): "));
let total = 0;

while(i !== 0){
    total = total + i;  
    i = Number(prompt("digite outro número: "));
      
}

console.log("o total da soma de todos os números é: " + total)

