// 12) Faça um algoritmo que calcule o fatorial de um número.

// Mesmo resultado utilizando um laço de repetição:
function fatorial(n) {
    let resultado = 1

    for (let i = 2; i <= n; i++) {
        resultado *= i
    }

    return resultado
}

console.log(fatorial(10))

//Resposta do professor utilizando recursividade:
function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))
