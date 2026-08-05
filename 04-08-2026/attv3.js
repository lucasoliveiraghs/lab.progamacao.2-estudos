const celular = {
    marca: "Xiaomi",
    modelo: "Redmi 12C",
    nivelBateria: 100,
    espacoLivreGB: 256
}

for(let prop in celular){
    celular.marca = "Apple"
    celular.modelo = "Iphone 11"
}

for(let prop in celular){
    console.log(celular[prop]);
}