const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))  // pega todas as chaves do objeto ex: nome, idade, peso
console.log(Object.values(pessoa))  // pega os valores do objeto ex: Rebeca, 2, 13
console.log(Object.entries(pessoa))  // pega as chaves e os valores do objeto ex: [ ['nome', 'Rebeca'], ['idade', 2], ['peso', 13] ]

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})  // Usamos aqui o recurso destructuring  para pegar a chave e o valor do objeto ['chave', 'valor'] e imprimir no console.

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // torna a propriedade enumerável, ou seja, ela aparecerá nas listagens de chaves do objeto.
    writable: false,  // torna a propriedade não gravável, ou seja, seu valor não pode ser alterado após ser definido.
    value: '01/01/2019'
})  // defineProperty é usado para definir uma nova propriedade em um objeto ou modificar uma propriedade existente. No exemplo acima, estamos definindo a
//  propriedade 'dataNascimento' com o valor '01/01/2019', tornando-a enumerável (pode ser listada) e não gravável (não pode ser alterada).

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)  // O dest vai receber as propriedades de o1 e o2, se houver propriedades com o mesmo nome, a última
// sobrescreve as anteriores. No exemplo acima, a propriedade 'a' do dest será sobrescrita pelo valor 4 de o2.

Object.freeze(obj)
obj.c = 1234
console.log(obj)