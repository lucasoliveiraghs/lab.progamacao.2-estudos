const  H2elemento = document.getElementById("subtitulo")

H2elemento.innerText = "Olá Mundo"

const  topicosElementos = document.getElementById("topicos")

topicosElementos.innerHTML = `<h3>getElementById</h3>
 <p> Busca um elemento apartir do seu identificador único </p>`

//Puxar o botão do HTML para o JS adicionar um evento no botão para quando for clicado ele puxar o nome do input e imprimir como h3

const botaoImprime = document.getElementById("imprime")
botaoImprime.addEventListener("click", () => {
    const entrada = document.getElementById("nome").value
    const mensagemEle = document.getElementById("mensagem")
    if(entrada != null && entrada != undefined && entrada != ""){
    mensagemEle.innerText = `Bom dia ${entrada}`}else{
        mensagemEle.innerText = `Não é válido`
    }
})

