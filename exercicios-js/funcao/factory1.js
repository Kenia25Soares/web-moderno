// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

// Factory e uma função que retorna um objeto, e pode receber parametros para criar objetos diferentes