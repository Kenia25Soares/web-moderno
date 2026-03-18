// console.log(global)
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})

// Ao usar o freeze eu congelo o Objeto e assim, não da para ser alterado em outros arquivos