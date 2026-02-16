// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))  // 4 meses de atraso, valor da anuidade R$ 100,00. O valor a ser pago deve ser R$ 115,76.
// sera 100 * (1 + 0,05) ** 3 = 115,76
console.log(calcularValor(11, 100))
// 10 meses de atraso, valor da anuidade R$ 100,00. O valor a ser pago deve ser R$ 162,89.
// sera 100 * (1 + 0,05) ** 10 = 179,59
console.log(calcularValor(0, 100)) // Mês inválido.
console.log(calcularValor(10, 100)) // 9 meses de atraso, valor da anuidade R$ 100,00. O valor a ser pago deve ser R$ 155.13.
