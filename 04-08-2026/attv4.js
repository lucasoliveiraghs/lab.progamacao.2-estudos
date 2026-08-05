const notaAluno = {
    matemática: 10.0,
    portugues: 2.5,
    historia: 6.0,
    geografia: 7.0,
    Biologia: 8.5
}

let soma = 0;
let divisor = 0;

for(let prop in notaAluno){
   soma += notaAluno[prop]
   divisor++;
}

const media = soma / divisor;

if(media >= 7.0){
    console.log("está indo bem");
}else{
    console.log("Bora estudar");
}