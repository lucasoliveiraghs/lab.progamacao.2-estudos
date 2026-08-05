const bibliotecaJogos = [
  {
    titulo: "Batman Arkham Knight",
    genero: "Ação",
    preco: 29.90,
    zerado: true
  },
  {
    titulo: "Hollow Knight",
    genero: "Metroidvania",
    preco: 46.90,
    zerado: false
  },
  {
    titulo: "Red Dead Redemption 2",
    genero: "Aventura",
    preco: 79.90,
    zerado: false
  },
  {
    titulo: "Call Of Duty: Advanced Warfare",
    genero: "Tiro",
    preco: 299.90,
    zerado: true
  }
]

for(let jogos of bibliotecaJogos){
    if(jogos.zerado === true){
        console.log(`Os jogos já zerados são: ${jogos.titulo} - ${jogos.genero}, - ${jogos.preco}`)
    }
}

let soma = 0;

for(let total of bibliotecaJogos){
    soma += total.preco;
}

console.log(`A soma total dos 4 jogos é de : R$ ${soma}`)