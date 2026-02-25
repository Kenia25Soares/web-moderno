/* 10- Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade
especificada no parâmetro.
Exemplos:*/
// simboloMais(2) // retornará "++"
// simboloMais(4) // retornará "++++"

// Resolução 1 utilizando um loop for para construir a string com o símbolo "+" repetido a quantidade de vezes especificada:
function simboloMais(quantidade) {
  let resultado = ''

for(let i = 0; i < quantidade; i++) resultado += '+'

return resultado
}

console.log(simboloMais(1)) // retornará "+"

// Resolução 2
// Resolução utilizando o método fill() do array, que preenche todos os elementos de um array com um valor estático:
function simboloMais(quantidade) {
  return new Array(quantidade).fill('+').join('')
}
console.log(simboloMais(3)) // retornará "+++"

// Resolução 3
// Outra forma de resolver o exercício é utilizando o método repeat() da string, que repete uma string um número específico
//  de vezes:
function simboloMais(quantidade) {
  return "+".repeat(quantidade)
}

console.log(simboloMais(5)) // retornará "++"
