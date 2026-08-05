const cardapio = [
  {
    id: 1,
    nome: "Coxinha de Frango com catupyri",
    preco: 6.50,
    categoria: "Salgado"
  },
  {
    id: 2,
    nome: "Suco Natural de Laranja",
    preco: 5.00,
    categoria: "Bebida"
  },
  {
    id: 3,
    nome: "Brigadeiro",
    preco: 3.50,
    categoria: "Doce"
  },
  {
    id: 4,
    nome: "espeto de frango empanado",
    preco: 6.00,
    categoria: "Salgado"
  },
  {
    id: 5,
    nome: "Refrigerante Lata coca-cola 0",
    preco: 5.50,
    categoria: "Bebida"
  }
]

let opcao = prompt("selecione: \n 1- Inserir um novo produto \n 2-Listar todos os produtos \n 3- Buscar por preço igual ou inferior a \n 4- Buscar pelo nome \n 5- Fechar programa"
)

switch(opcao){
    case '1':{
        const nome = prompt("nome:");
        const preco = Number(prompt("preco:"));
        const categoria = prompt("categoria: Ex: Doce/Bebida/Salgado");
        cardapio.push({id: cardapio.length + 1, nome, preco, categoria})
        alert("cadastrado!");
        break
    }

    case '2': {
    let lista = "Cardapio:\n";
    for (let item of cardapio) {
        lista += `${item.nome} - R$ ${item.preco}\n`; 
    }
    console.log(lista); 
    break;
}
    case '3': {
         const limite = Number(prompt("Digite o Valor máximo da busca:"))
         let result = "";
         for(let pesquisa of cardapio){
            if(pesquisa.preco <= limite){
                result += `${pesquisa.nome} - ${pesquisa.preco} \n`
            }
         }
         if (result !== "") {
               console.log(result);
            } else {
               console.log("Nenhum produto encaixa na categoria");
             }
               break;
     }
     
     case '4':{
        const procura = prompt("Nome:").toLowerCase();
        let filtro = "";
        for(let nomeia of cardapio){
            if(nomeia.nome.toLowerCase().includes(procura)){
            filtro += `${nomeia.nome} - ${nomeia.preco}`;
        }
     }
     if(filtro !== ""){
            console.log(filtro)
        }else{
            console.log("Nenhum produto encaixa na categoria");
        }
        break;
}

    case '5': {
        alert("PROGRAMA ENCERRADO")
        break;
    }

    default: {
       if(opcao !== null){
        alert("OPÇÃO INVÁLIDA")
       }
       break;
    }
}   