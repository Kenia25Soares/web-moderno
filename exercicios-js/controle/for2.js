const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// O for...in é usado para iterar sobre propriedades enumeráveis de um objeto ou índices de um array.
// Colocar o let antes da variável de iteração (i, atributo) é uma boa prática para limitar o escopo da variável ao bloco do loop.
// Isso evita que a variável seja acessível fora do loop, reduzindo o risco de conflitos de nomes e melhorando a legibilidade do código.