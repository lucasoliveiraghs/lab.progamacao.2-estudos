let par = 0;
let impar = 0;

for(let i = 1; i <= 8; i++){
    let numero = Number(prompt("digite um valor : "));

    if (numero % 2 ==0){
    par++;
    }else{
    impar++
    }
}

console.log("quantidade de números pares: " + par);
console.log("quantidade de números ímpares: " + impar);