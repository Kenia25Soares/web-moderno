let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)  // this não varia com arrow function e  da false
comparaComThisArrow(module.exports)

// This em arrow function é o this do contexto onde a função foi escrita, não o contexto de execução, diferente de funções normais.
// Mesmo usando bind, o this não muda.
// Arrow function não tem o seu próprio this.
//  O this ira sempre apontar para o contexto onde a função foi definida.