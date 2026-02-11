function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1  /* Valor fixo do objeto*/
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

// Se quiser passar o valor padrão do desconto, basta colocar o valor como parâmetro da função,
//  e passar o valor padrão do desconto como 0.1