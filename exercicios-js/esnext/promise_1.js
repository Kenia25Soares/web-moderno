// let a = 1
// console.log(a)

// let p = new Promise(function(cumprirPromessa) {
//   cumprirPromessa({
//     x: 3,
//     y: 4
//   })  // cumprirPromessa(3, 4)
// })

// p.then(function(valor) /*(valor, x)*/ {
//   console.log(valor)  // (valor, x)
// })  // Posso simplificar isso
// p.then (valor => console.log(valor))  // o then pode ser chamado varias vezes

const primeiroElemento = arrayOuString => arrayOuString[0]

const letraMinuscula = letra => letra.toLowerCase()

// List
new Promise(function(resolve) {
   resolve (['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)


// console.log(typeof p)
// console.log(typeof Promise)

// Posso até passar varios parametros, mais só sera considerado o 1ª, neste caso so 3, o valor de x sera undefined