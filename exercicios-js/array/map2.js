const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lápis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)  // Converte o texto para objeto.
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

// Outra forma, sem criar as funções paraObjeto e apenasPreco, usando arrow functions diretamente no map.

// const precos = carrinho.map(item => JSON.parse(item).preco)
// console.log(precos)
