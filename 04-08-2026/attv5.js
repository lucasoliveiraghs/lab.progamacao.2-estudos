const playlist = [
     {
        Titulo: "O cravo e a rosa",
        Artista: "vmz",
        duracaoSegundos: 330
     },
     {
        Titulo: "Girassol",
        Artista: "Ivysson",
        duracaoSegundos: 180
     },
     {
        Titulo: "Rap da Akatsuki",
        Artista: "7mz",
        duracaoSegundos: 600
     }
]

playlist.push({
    Titulo: "Redento",
        Artista: "vmz e Rodrigozin",
        duracaoSegundos: 220
})

const maiscentoeoitenta = [];

for(const musica of playlist){
    if( musica.duracaoSegundos > 180){
    maiscentoeoitenta.push(musica)
    }
}

 console.log(maiscentoeoitenta)