/*3- Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o
quanto ele recebe por hora.
O retorno da função deve ser a string "Salário igual a € X", em que X é o quanto funcionário no mês.
Exemplos:*/
// calcularSalario(150, 40.5) // retornará "Salário igual a € 6975"


// Resolução:
function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) { const salarioBruto = horasTrabalhadas * ganhoPorHora
const salarioLiquido = salarioBruto - salarioBruto * 30/100

return `Salário igual a € ${salarioLiquido}`
}
console.log(calcularSalarioLiquido(150, 40.5))