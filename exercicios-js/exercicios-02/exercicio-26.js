/* 26- Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes, ou seja,
sem as vogais.
Exemplos:*/

// removerVogais("Cod3r") // retornará "Cd3r"
// removerVogais("Fundamentos") // retornará "Fndmnts"


// Resolução 1:
function removerVogais(frase) {
  const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
  vogais.forEach( vogal => frase = frase.replace(vogal, '') )
  return frase
}
console.log(removerVogais("Alegria")) // retornará "lgr"
console.log(removerVogais("Ação")) // retornará "çã"

// Resolução 2:
function removerVogais(frase) {
  return frase.replace(/[aeiouãàáâãäåæèéêëìíîïòóôõöøùúûü]/ig, '')
}
console.log(removerVogais("Superação")) // "Sprç"
