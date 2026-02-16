// 11) As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.

function calcularAnoBissexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(0)) // 0 é um ano inválido, portanto retorna false
console.log(calcularAnoBissexto(4)) // 4 é divisível por 4, mas não é divisível por 100, portanto é bissexto
console.log(calcularAnoBissexto(100)) // 100 é divisível por 4, mas não é bissexto porque é divisível por 100
console.log(calcularAnoBissexto(400)) // 400 é divisível por 4, por 100 e por 400, portanto é bissexto
console.log(calcularAnoBissexto(800)) // 800 é divisível por 4, por 100 e por 400, portanto é bissexto
console.log(calcularAnoBissexto(2020)) // 2020 é divisível por 4, mas não é divisível por 100, portanto é bissexto
console.log(calcularAnoBissexto(2021)) // 2021 não é divisível por 4, portanto não é bissexto