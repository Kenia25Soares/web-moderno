const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)
console.log(resultado, nums) // O map não altera o array original, ele cria um novo array com os resultados da função aplicada a cada elemento do array original.

const soma10 = e => e + 10  // vai adicionar 10 a cada elemento do array 10+1, 10+2, 10+3, 10+4, 10+5
const triplo = e => e * 3    // vai multiplicar cada elemento do array por 3 (3*11, 3*12, 3*13, 3*14, 3*15)
const paraDinheiro = e => `€ ${parseFloat(e).toFixed(2).replace('.', ',')}`  // vai formatar cada elemento do array, string de dinheiro, duas casas decimais ex: "€ 33,00"

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

// Map é um método de array que cria um novo array com os resultados da chamada de uma função para cada elemento do array original.
//  Ele é muito útil para transformar os dados de um array de forma simples e eficiente. Onde o arrays tem o mesmo número de elementos do array original.