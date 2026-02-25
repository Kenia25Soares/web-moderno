/* 29- Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos:*/

// segundoMaior([12, 16, 1, 5]) // retornará 12
// segundoMaior([8, 4, 5, 6]) // retornará 6

// Resolução 1
function segundoMaior(numeros) {
  let indiceDoMaior = 0
  let segundoMaior

  numeros.forEach( (numero, indice) => {
     if( numero > numeros[indiceDoMaior] )
        indiceDoMaior = indice
  })

  numeros.splice(indiceDoMaior, 1)
  segundoMaior = numeros[0]

  numeros.forEach(numero => {
    if(numero > segundoMaior)
      segundoMaior = numero
  })

  return segundoMaior
}
console.log(segundoMaior([1, 6, 8, 5])) // 6



// Resolução 2:
function segundoMaior(numeros) {
  const maiorNumero = Math.max(...numeros)
  numeros = numeros.filter(numero => numero != maiorNumero)
  const segundoMaior = Math.max(...numeros)

  return segundoMaior
}
console.log(segundoMaior([10, 15, 22, 5])) // 15


// Resolução 3:
function segundoMaior(numeros) {
  const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
  const segundoMaior = numerosOrdenados[1]

  return segundoMaior
}
console.log(segundoMaior([1, 2, 3, 4, 5])) // 4
