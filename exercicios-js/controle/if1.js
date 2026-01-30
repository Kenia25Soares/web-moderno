function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null) // null é falso
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ') // string com espaço é verdadeiro
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])  // array vazio é verdadeiro
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})  // objeto vazio é verdadeiro