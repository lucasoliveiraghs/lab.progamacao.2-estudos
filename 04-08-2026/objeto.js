

/* const aluno = {}

aluno.nome = "aristolfo";
aluno.nota= 6;*/

//----------------------------------

const aluno = {
    nome: "Aristolfo",
    nota: 6,
    curso: "TINF"
}

aluno.nota = 9;

aluno ["email"] = "aristolfo@gmail.com"; 

for(let prop in aluno){
    console.log(aluno[prop]);
}

