const funcs = []
for (var i = 0; i < 10; i++) {
    fucs.push(function() {
      console.log(i)
    })
}

    funcs[2]() // Chama a função na posição 2 do array funcs e imprime o valor de 'i' naquele momento. Que será 10.
    funcs[8]()

// funcs.push(function()  adiciona uma função ao array funcs que, quando chamada, irá imprimir o valor atual de 'i'.

// Como 'var' tem escopo de função, todas as funções adicionadas ao array funcs irão referenciar a mesma variável 'i'.

// Quando o loop termina, o valor de 'i' é 10. Portanto, quando funcs[2]() e funcs[8]() são chamados, ambas as funções imprimem 10,
// pois é o valor atual de 'i' no momento da chamada.