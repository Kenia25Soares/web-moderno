let numero = 1
{
    let numero = 2  //Let so vai existir dentro desse bloco
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//Let tem escopo de bloco, diferente do var que so tem escopo de funcao