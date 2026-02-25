/*2- Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
📕 Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e desconsidere também dias decorridos
desde o último aniversário.
Exemplo:*/

// converterIdadeEmAnosParaDias(25) // retornará 9125
// converterIdadeEmAnosParaDias(70) // retornará 25550

// Resolução:
function converterIdadeEmAnosParaDias(idadeEmAnos) {
   const diasDoAno = 365

return diasDoAno * idadeEmAnos
}
console.log(converterIdadeEmAnosParaDias(25))
