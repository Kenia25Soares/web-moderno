// -- Preciso adicionar uma nova função ao protótipo do array, para isso basta criar a função e atribuir ela ao Array.prototype, dessa forma ela
//  estará disponível para todos os arrays, e dentro da função eu posso usar o this para acessar o array que chamou a função, e o for para percorrer
// o array e chamar a função callback para cada elemento do array.
// -- callback é a função que será executada para cada elemento do array, e os parâmetros da função callback são o valor do elemento, o índice do
// elemento e o array completo

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)  // -- aqui eu passo o valor do elemento, o índice do elemento e o array completo para a função callback
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})