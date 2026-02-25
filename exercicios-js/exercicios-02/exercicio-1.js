/* 1- Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto
de exclamação "!" no final.
Exemplos:*/
// cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
// cumprimentar("Maria") // retornará "Olá, Maria!"

// Resolução:

// Usando join() e concat()
function cumprimentar(nome) { const saudacao = "Olá"
return [saudacao, nome].join(', ').concat("!")
}
console.log(cumprimentar("Leonardo"))

// Usando concatenação de strings
function cumprimentar(nome) {
  return "Olá, " + nome + "!";
}
console.log(cumprimentar("Leonardo"))

// Usando template literals
function cumprimentar(nome) {
  return `Olá, ${nome}!`;
}
console.log(cumprimentar("Leonardo"))