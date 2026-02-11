const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

// o callback é uma função que é passada como parâmetro para outra função
// dentro do array, a função forEach chama a função callback para cada elemento do array