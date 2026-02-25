/* 23- Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
Considere que todas as palavras só são separadas por um espaço.
Exemplos:*/

// contarPalavras("Sou uma frase") // retornará 3
// contarPalavras("Me divirto aprendendo a programar") // retornará 5

//Resolução
function contarPalavras(frase){
  const palavras = frase.split(" ")
  return palavras.length
}

console.log(contarPalavras("JavaScript é uma linguagem de programação")) // 6
console.log(contarPalavras("Me ")) // 2, pois o espaço é considerado uma palavra