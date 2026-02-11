let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { /* o ( => ) e o function*/
    return 2 * a
}

dobro = a => 2 * a // return implícito, quando tira as chaves{}
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'  // sem parâmetros, usa-se os parênteses vazios
ola = _ => 'Olá' // possui um param, em javascript o _ é um param válido
console.log(ola())