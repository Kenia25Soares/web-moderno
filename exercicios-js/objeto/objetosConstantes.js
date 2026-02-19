// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }  // TypeError: Assignment to constant variable. Não é possível atribuir um novo objeto a uma constante, mas é possível
//  modificar as propriedades do objeto existente, por ex: pessoa.nome = 'Maria'

Object.freeze(pessoa)  //Freeze congela o objeto, ou seja, não permite mais alterações nas propriedades do objeto, nem adição ou remoção de propriedades.

pessoa.nome = 'Maria'
// console.log(pessoa.nome) // O valor de pessoa.nome permanece 'Pedro' porque o objeto foi congelado e não permite mais alterações.
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)