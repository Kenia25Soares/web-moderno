/*4- Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada
for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos:*/

// receberNomeDoMes(1) // retornará "janeiro"
// receberNomeDoMes(4) // retornará "abril"


// Resolução:
function receberNomeDoMes(numero) {
  switch(numero){
    case 1:
    return "janeiro";
     case 2:
    return "fevereiro";
    case 3:
    return "março";
    case 4:
    return "abril";
    case 5:
    return "maio";
    case 6:
    return "junho";
     case 7:
    return "julho";
     case 8:
    return "agosto";
    case 9:
    return "setembro";
    case 10:
    return "outubro";
     case 11:
    return "novembro";
     case 12:
    return "dezembro";
    default:
    return "Número inválido. Por favor, insira um número entre 1 e 12.";
  }
}
console.log(receberNomeDoMes(4));

// Outra forma de resolver o exercício utilizando um array
function receberNomeDoMes(numero) {
const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

return mapeamento[--numero];
}

console.log(receberNomeDoMes(12));
