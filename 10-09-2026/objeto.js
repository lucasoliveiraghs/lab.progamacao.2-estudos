const automovel1 = {
    nome: prompt("Digite o nome do primeiro automóvel"),
    modelo: prompt("Digite o modelo do primeiro auomóvel"),
    marca: prompt("Digite a marca do primeiro automóvel"),
    preco: Number(prompt("Digite o preço do primeiro automóvel")),
    velmax: Number(prompt("Digite a velocidade máxima do primeiro automóvel")),
}
const automovel2 = {
    nome: prompt("Digite o nome do segundo automóvel"),
    modelo: prompt("Digite o modelo do segundo auomóvel"),
    marca: prompt("Digite a marca do segundo automóvel"),
    preco: Number(prompt("Digite o preço do segundo automóvel")),
    velmax: Number(prompt("Digite a velocidade máxima do segundo automóvel")),
};

if (automovel1.velmax > automovel2.velmax ) {
    alert(`O automóvel ${automovel1.nome} tem a maior velocidade máxima com ${automovel1.velmax} KM/h`)
} else if(automovel2.velmax > automovel1.velmax) {
    alert(`O automóvel ${automovel2.nome} tem a maior velocidade máxima com ${automovel2.velmax} KM/h`)
}else{
    alert(`Os automóveis tem velocidades iguais`)
}

if (automovel1.preco > automovel2.preco){
    alert(`O automóvel mais caro é da marca ${automovel1.marca}`)
}else if(utomovel2.preco > automovel1.preco) {
     alert(`O automóvel mais caro é da marca ${automovel2.marca}`)
}else if(automovel1.preco == automovel2) {
    alert(`Os automóveis tem preços iguais iguais`)
}else{
    alert(`ERRO, valor inválido`)
}