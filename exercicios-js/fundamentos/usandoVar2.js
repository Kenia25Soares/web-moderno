var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// vai imprimir 2 tanto dentro quanto fora, pq a variavel var nao respeita escopo de bloco, apenas escopo de funcao.