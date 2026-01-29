const escola = "Cod3r"

console.log(escola.charAt(4))  //vai mostrar o caractere que está na posição 4, no caso o r da palavra Cod3r
console.log(escola.charAt(5))  //posição que não existe, então retorna vazio
console.log(escola.charCodeAt(3)) //retorna o valor na tabela unicode do caractere que está na posição 3, no caso o número 51 que é o 3
console.log(escola.indexOf('3'))

console.log(escola.substring(1))  //começa na posição 1 e vai até o final, ode3r
console.log(escola.substring(0, 3))  //começa na posição 0 e vai até a posição 3, mas não inclui o caractere da posição 3, então vai ser Cod

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))  // (/\d/, 'e'))  expressão regular para procurar dígito, e vai substituir tds os digitos por e
console.log(escola.replace(/\w/g, 'e'))  //expressão regular para procurar todos os caracteres alfanuméricos e substituir por e


console.log('Ana,Maria,Pedro'.split(','))  //vai gerar um array separando os nomes onde tiver vírgula