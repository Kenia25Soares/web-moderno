const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa e removido, pop tira o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')  // adiciona um elemento no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')  // unshift adiciona um elemento no inicio do array, no caso fica Hamilton, Alonso, Raikkonen, Verstappen,
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)  // splice(2, 0, 'Bottas', 'Massa') a partir do indice 2, nao remove ninguem, e adiciona Bottas e Massa
// resultado:[ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

// remover
pilotos.splice(3, 1) // a partir do indice 3, remove 1 elemento, ou seja, Massa
console.log(pilotos) // resultado: [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos1 = pilotos.slice(2) // novo array, ele pega um novo array a partir do indice 2, ou seja, Bottas, Raikkonen, Verstappen
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)  // pegar um pedaço do array, a partir do indice 1, e vai ate o indice 4, ou seja, Alonso, Bottas, Raikkonen,
console.log(algunsPilotos2)                 // o elemento 4 nao entra, entao ele para no indice 3