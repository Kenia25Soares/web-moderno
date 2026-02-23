const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))   // [ 7.3, 9.2, 9.8, 8.7 ]
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual  // na 1 int vai ser 0 + 7.3, na 2 int vai ser 7.3 + 9.2, na 3 int vai ser 16.5 + 9.8 e na 4 int vai ser 26.3 + 8.7
}, 0)

console.log(resultado)

// reduce e uma função de alta ordem, ou seja, ela recebe uma função como argumento e retorna um valor.
// Ela é utilizada para reduzir um array a um único valor, seja ele um número, uma string, um objeto, etc. O reduce recebe dois argumentos:
// a função de callback e o valor inicial. A função de callback recebe quatro argumentos: o acumulador, o valor atual, o índice atual e o array original.
//  O acumulador é o valor que vai sendo acumulado ao longo das iterações, o valor atual é o elemento do array que está sendo processado, o índice atual é a
// posição do elemento no array e o array original é o array que está sendo reduzido. O valor inicial é opcional e é utilizado para definir o valor inicial do acumulador.
// Se não for fornecido, o primeiro elemento do array será utilizado como valor inicial e a iteração começará a partir do segundo elemento.