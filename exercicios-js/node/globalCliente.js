require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'  // Ao tentar mudar aqui, não e possivel, uso no global.js o objeto com freeze, vai manter  "Sistema Legal" ao invés de mudar para  Eita
console.log(MinhaApp.nome)