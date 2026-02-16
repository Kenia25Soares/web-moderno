// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir
//  o resultado e o resto da divisão destes dois valores.

function divisao(dividendo, divisor) {
    const resultado = Math.floor(dividendo / divisor); // O método Math.floor() arredonda um número para baixo, para o inteiro mais próximo.
    //const resultado = dividendo / divisor; // Se quiser o resultado com casas decimais, basta usar a divisão normal. 0.6666666666666666
    const resto = dividendo % divisor;
    console.log(`Resultado: ${resultado}, Resto: ${resto}`)
}

divisao(2, 3)

//Resposta:
// function divisao (dividendo, divisor) {
//     console.log("Resultado: " + Math.floor(dividendo/divisor));
//     console.log(`Resto: ${dividendo % divisor}`)
// }

// divisao(11, 4)