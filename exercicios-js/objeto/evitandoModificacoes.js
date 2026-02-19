// Object.preventExtensions  / Não permite adicionar novos atributos, mas é possível modificar os existentes e deletar
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))  // isExtensible = é extensível? true ou false, isso quer dizer se é possível adicionar
// novos atributos ou não, nesse caso é false, pois o objeto foi criado com preventExtensions

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal  / Não permite adicionar novos atributos, nem deletar, mas é possível modificar os existentes
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes