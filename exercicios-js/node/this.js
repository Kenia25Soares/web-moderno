console.log(this === global)
console.log(this === module) // da false

console.log(this === module.exports)  // true
console.log(this === exports)  // true

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)  // só aqui que da true
}

logThis()
// this dentro de uma função aponta para global
// this fora de uma funcão aponta para module.exports/exports.

function functionExpression() {

    console.log("Aponta para o global →", this == global)  //true
    console.log("Não aponta para o exports →", this == exports)  // false
    console.log("Não aponta para o module.exports →", this == module.exports) // false

    console.log("O this nesta função é o objeto GLOBAL →", this)
}
functionExpression()


// dentro de uma arrow function, o this não vai apontar mais para o objeto global, e sim para o module.export / exports.

// const arrowFunction = () => {

//     console.log("Não aponta para o global →", this == global)  //false
//     console.log("Aponta para o exports →", this == exports)  // true
//     console.log("Aponta para o module.exports (que é basicamente o mesmo que exports) →", this == module.exports) // true

//     console.log("O this nesta função NÃO É O GLOBAL →", this == global)  // false
//     console.log("O this nesta função É O MODULE.EXPORTS →", this == module.exports) // true
// }

// arrowFunction()