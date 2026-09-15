function imprimeOla(nome) {
    alert(`Olá ${nome}`)
}

function leNome(){
    let pNome = prompt("Digite seu nome:");
    return pNome;
}

let nomeSalvo = leNome()
imprimeOla(nomeSalvo)