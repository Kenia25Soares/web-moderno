console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('b =', b)
let b = 2
console.log('b =', b)

// Se a Var for usada antes de sua declaração, o JavaScript a "eleva" (hoisting) para o topo do escopo, mas não inicializa seu valor,
// resultando em 'undefined'. Já o Let não sofre hoisting da mesma forma; tentar acessá-lo antes da declaração resulta em um erro de
//  referência (ReferenceError).

// o conceito de hoisting se aplica apenas a var, não a let ou const.Que e o içamento de variáveis em JavaScript se refere ao comportamento
// padrão de mover declarações para o topo do escopo antes da execução do código.