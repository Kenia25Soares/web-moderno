function getPreco(imposto = 0, moeda = '€') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())  // chama a função diretamente, usando o contexto global (globalThis)
console.log(produto.getPreco())  // chama a função como método do objeto produto, usando o contexto do produto (this = produto)

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))  // call() chama a função, passando o objeto como contexto (this)
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '€'))
console.log(getPreco.apply(global, [0.17, '€']))

 // A diferença entre call e apply é a forma como os argumentos são passados:
 // - call() aceita uma lista de argumentos separados por vírgula.
 // - apply() aceita um array de argumentos.