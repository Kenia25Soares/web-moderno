// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function calcularJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    const montante = capitalInicial * (1 + (taxaJuros / 100) * tempoAplicacao);
    return montante;
}

function calcularJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    const montante = capitalInicial * Math.pow((1 + (taxaJuros / 100)), tempoAplicacao);
    return montante;
}

const capitalInicial = 100;
const taxaJuros = 100;
const tempoAplicacao = 2;
const montanteSimples = calcularJurosSimples(capitalInicial, taxaJuros, tempoAplicacao);
const montanteComposto = calcularJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao);
console.log(`Montante com juros simples: € ${montanteSimples.toFixed(2)}`);
console.log(`Montante com juros compostos: € ${montanteComposto.toFixed(2)}`);


//Resposta:
// function jurosSimples (capitalInicial, taxa, tempo) {
//     return capitalInicial + (capitalInicial * taxa * tempo)
// }

// function jurosCompostos (capitalInicial, taxa, tempo) {
//     return capitalInicial * (1 + taxa) ** tempo
// }

// console.log(jurosSimples(100, 10/100, 2));
// console.log(jurosCompostos(100, 10/100, 2));