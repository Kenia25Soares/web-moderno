/* 28- Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica
 uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos
indicada pelo segundo parâmetro.
Exemplos:*/

// filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
// filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]


// Resolução 1:
function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
  let resultado = []
  for(numero of numeros){
    const quantidadeDeDigitos = String(numero).length

    if(quantidadeDeDigitos === quantidadeDesejada)
      resultado.push(numero)
  }

  return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([32, 88, 74, 4, 19], 3)) // retornará [], pois nenhum número tem 3 dígitos



// Resolução 2:
function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
  return numeros.filter(numero => {
    const quantidadeDeDigitos = String(numero).length

    return quantidadeDeDigitos === quantidadeDesejada
  })
}
console.log(filtrarPorQuantidadeDeDigitos([22, 88, 5, 2, 55], 2)) // retornará [22, 88, 55]
