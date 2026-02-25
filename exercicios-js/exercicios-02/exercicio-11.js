// 11- Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
// Exemplos:
// receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
// receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

// Resolução 1:
/*A função recebe um array como parâmetro e armazena o índice do primeiro elemento (0) e o índice do último elemento
(tamanho do array - 1). Em seguida, ela acessa o primeiro e o último elemento usando esses índices e retorna um novo array
contendo ambos os elementos.*/

function receberPrimeiroEUltimoElemento(elementos) {
   const indiceDoPrimeiroElemento = 0
   const indiceDoUltimoElemento = elementos.length - 1
   const primeiroElemento = elementos[indiceDoPrimeiroElemento]
   const ultimoElemento = elementos[indiceDoUltimoElemento]

return [primeiroElemento, ultimoElemento]
}
console.log(receberPrimeiroEUltimoElemento([5,2,"olá"])) // retornará [5, "olá"]
console.log(receberPrimeiroEUltimoElemento([-5, "aplicativo", 6])) // retornará [-5, 6]



//Resolução 2:
/* Afunção recebe um array como parâmetro e utiliza os métodos shift() e pop() para obter o primeiro e o último elemento do array,
respectivamente. O método shift() remove e retorna o primeiro elemento do array, enquanto o método pop() remove e retorna o último
elemento. Em seguida, a função retorna um novo array contendo ambos os elementos.*/
function receberPrimeiroEUltimoElemento(elementos) {
  const primeiroElemento= elementos.shift()
  const ultimoElemento = elementos.pop()

return [primeiroElemento, ultimoElemento]
}
console.log(receberPrimeiroEUltimoElemento([5, "aplicativo", 3])) // retornará [5, 3]



// Resolução 3:
/* A função utiliza a desestruturação de arrays para extrair o primeiro elemento e os elementos restantes do array.
Em seguida, ela utiliza o método pop() para obter o último elemento dos elementos restantes. Por fim, a função retorna um
novo array contendo o primeiro e o último elemento. */
function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
  const ultimoElemento = elementosRestantes.pop()

return [primeiroElemento, ultimoElemento]
}
console.log(receberPrimeiroEUltimoElemento([1,2,"oi"])) // retornará [1, "oi"]
