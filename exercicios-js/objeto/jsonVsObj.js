const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }  // JSON.stringify(obj) não inclui soma? Porque JSON não serializa funções.
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))  Da erro, pois as chaves devem ser string e as aspas devem ser duplas
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))   Da erro, pois as chaves devem ser string e as aspas devem ser duplas
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))