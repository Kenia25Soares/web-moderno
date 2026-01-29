{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)

// Se for declarada fora de uma função, seu escopo será global.
// Se for declarada dentro de uma função, seu escopo será local. e não poderá ser acessada fora da função. Não ira ao escopo global.