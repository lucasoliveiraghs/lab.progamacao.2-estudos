 
 /*const vetor = [];

 let aluno = {
    nome: "aristolfo",
    nota: 9
 }

 vetor.push(aluno)*/

 /*const vetor = [];

 let aluno = {
    nome: prompt("Digite um nome:"),
    nota: 9
 }

 vetor.push(aluno) */

const vetor = [
    {  
        nome: "Aristolfo",
        nota: 9
    },
    {
        nome: "Vanisclaudia",
        nota: 7
    },
    {
        nome: "Claudenir",
        nota: 8
    },
 ]

 for(let aluno of vetor){
    console.log(`O aluno ${aluno.nome} tem nota ${aluno.nota}`)

 }

 // usando for normal

 /* FOR(let i; i < vetor.lenght; i++){
 console.log('O aluno ${vetor[i].nome} tema nota ${vetor[i].nota})
 } */