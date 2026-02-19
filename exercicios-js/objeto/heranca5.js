console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())  // Cuidado ao modificar objetos nativos, pode causar problemas em outras partes do código, aqui o método reverse
// não funciona mais, pois o toString foi modificado. Resutado: sera ao contrario  odut uocsaL (Lascou tudo)