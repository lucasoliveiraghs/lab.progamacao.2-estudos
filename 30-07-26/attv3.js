/*Em uma lanchonete ou banco, clientes entram no final da fila e são
atendidos a partir do início da fila. Crie um vetor e adicione 5 clientes
na fila, um por vez (push). Posteriormente, crie um laço que repetição
que percorra cada cliente, REMOVA do vetor (shift) e emita a
mensagem “O cliente xxxx foi atendido”. Ao final, confira como o vetor
ficou no console.*/

// usei Ia pra fazer 

const fila = [];

for (let i = 1; i <= 5; i++){
    let nome = prompt("digite o nome do " + i + "º cliente:");
    fila.push(nome);
}

while (fila.length > 0){
    let cliente = fila.shift();
    console.log("O(a) cliente " + cliente + " foi atendido(a)");
}

console.log("fila ao final do atendimento:" + fila)