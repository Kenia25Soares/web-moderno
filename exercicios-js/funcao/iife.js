// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()  // com os parênteses no final, a função é executada na hora. Se não tivesse, seria apenas uma função anônima, sem nome, que não poderia ser chamada depois.

// Essa função é executada na hora, não precisa ser chamada depois. Ela é auto-invocada. O código dentro dela não interfere no
// escopo global, ou seja, as variáveis criadas dentro dela não ficam disponíveis fora dela.