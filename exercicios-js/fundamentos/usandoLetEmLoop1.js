for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i) // ReferenceError: i is not defined, em vez de imprimir 10, pois 'i' foi declarada com 'let'
                     //  dentro do escopo do loop. Fora do loop, 'i' não existe.