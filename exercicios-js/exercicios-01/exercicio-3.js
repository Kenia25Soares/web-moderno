/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/

function calcularPotencia(base, expoente) {
    return base ** expoente
}
console.log(calcularPotencia(1, 2)) // 1
console.log(calcularPotencia(3, 2)) // 9




//Resposta:
// function expoente (base, expoente) {
//     //Podemos fazer de 2 modos
//     //Método antigo:
//     let resultado = Math.pow(base, expoente)
//     //Método novo:
//     resultado = base ** expoente

//     return resultado
// }

// console.log(expoente(2, 3))