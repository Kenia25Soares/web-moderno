console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])  // undefined, pois o indice 3 não existe

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)  // o length é 5, pois o indice 3 foi criado com o valor 'Paulo' e o indice 4 foi criado com o valor 'Abia'

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]
aprovados.sort()
console.log(aprovados)  // com o sort, os elementos do array são ordenados em ordem alfabética, e os elementos vazios são colocados no final do array

delete aprovados[1]  // o delete remove o elemento do array, mas não altera o length do array, ou seja, o indice 1 continua existindo, mas com o valor undefined
console.log(aprovados[1]) //undefined
console.log(aprovados[2])  // Bia

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)

// splice pode ser usado para adicionar elementos em um array, além de remover, neste caso, o primeiro parâmetro é o índice onde os elementos serão
//  adicionados, o segundo parâmetro é o número de elementos a serem removidos, e os demais parâmetros são os elementos a serem adicionados