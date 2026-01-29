let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)  //null
// console.log(valor.toString()) // Erro! se tentar acessar um método de um valor null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

// undefined e quando a variável não foi inicializada
// null é quando deliberadamente se atribui a ausência de valor