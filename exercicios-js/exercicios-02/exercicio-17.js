/* 17- Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:*/
// somarNumeros([10, 10, 10]) // retornará 30
// somarNumeros([15, 15, 15, 15]) // retornará 60

// Resolução 1:
function somarNumeros(numeros) {
  const quantidadeDeNumeros = numeros.length

  return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}
console.log(somarNumeros([10, 10])) // retornará 30


// Resolução 2:
function somarNumeros(numeros) {
  let soma = 0
  numeros.forEach(numero => soma += numero)

  return soma
}
console.log(somarNumeros([1, 10, 15])) // 26

// Resolução 3:
function somarNumeros(numeros) {
  const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)

  return soma
}
console.log(somarNumeros([105, 5, 15])) // 125