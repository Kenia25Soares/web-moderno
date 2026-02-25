/* 25- A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras
semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
Exemplos:*/

// buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
// buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]) // retornará ["javascript", "java"]



// buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []

//Resolução 1:
function buscarPalavrasSemelhantes(inicio, palavras) {
  const resultado = []

  for (let palavra of palavras)
    if (palavra.includes(inicio))
      resultado.push(palavra)

  return resultado
}
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])) // retornará []
console.log(buscarPalavrasSemelhantes("mo", ["programação", "mobile", "profissional"])) // [ 'mobile' ]
console.log(buscarPalavrasSemelhantes("", ["javascript", "java", "c++"])) // ["javascript", "java", "c++"]


// Resolução 2:
function buscarPalavrasSemelhantes(inicio, palavras) {
  return palavras.filter(palavra => palavra.includes(inicio))
}
console.log(buscarPalavrasSemelhantes("grama", ["programação", "mobile", "profissional"])) // [ 'programação' ]
