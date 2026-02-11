// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {  // Essa abordagem tem um problema: se passar 0 como argumento, ele considera como falso
    a = a || 1             // e atribui o valor padrão, neste caso soma1(0, 0, 0) retornaria 3. É Esta errada
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0), soma1(0, 2, 0))
// na soma1(3), o 3 é atribuído a 'a', e 'b' e 'c' recebem os valores padrão 1 e 1, respectivamente, resultando em 3 + 1 + 1 = 5.

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do es2015   // forma mais moderna e recomendada
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))