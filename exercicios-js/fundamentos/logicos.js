function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

// V e V -> V
// V e F -> F
// F e V -> F
// F e F -> F

// V ou V -> V
// V ou F -> V
// F ou V -> V
// F ou F -> F

// Ou exclusivo (xor)
//V xor V -> F
//V xor F -> V
//F xor V -> V
//F xor F -> F

// !V -> F
// !F -> V

// Usando E todos so são verdadeiros se todos os valores forem verdadeiros
// Usando OU todos são falsos se todos os valores forem falsos