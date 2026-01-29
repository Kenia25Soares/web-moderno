const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //tamanho do array 5

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // pop remove o último elemento do array e retorna ele

delete valores[0] //deleta o valor da posição 0, mas o índice continua existindo como undefined [<1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste']
console.log(valores)

console.log(typeof valores)

//Em JavaScript, arrays são do tipo object