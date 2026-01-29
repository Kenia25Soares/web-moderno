// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN = Not a Number vai da Nan
imprimirSoma(2, 10, 4, 5, 6, 7, 8)  // vai somar os dois primeiros e ignorar o resto
imprimirSoma()

console.log('-------------------')
// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3)) // 5
console.log(soma(2)) // b = 1 por padrão, então retorna 3, vai somar 2 + 1 (pega o valor 2 + valor padrão 1)
console.log(soma())

// Função é um bloco{} de código projetado para executar uma tarefa específica.