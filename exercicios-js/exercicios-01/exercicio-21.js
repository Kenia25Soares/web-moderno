// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam € 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam €80; 2) conveniados com idade entre 10 e 30 anos pagam €50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam € 95; e 4) conveniados acima de 60 anos pagam €130

function calcularPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPreco(8));  // Crianças com menos de 10 anos pagam €80 + €100 = €180
console.log(calcularPreco(15));
console.log(calcularPreco(35)); // Conveniados com idade entre 30  a 60 anos pagam €95 + €100 = €195
console.log(calcularPreco(52));
console.log(calcularPreco(80)); //+ 60 anos pagam €130 + €100 = €230