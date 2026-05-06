import React from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom' // a partir do react 18, o ReactDOM foi substituído pelo createRoot, que é uma função do react-dom/client

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// import { BoaTarde, BoaNoite } from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// const el = document.getElementById('root')
// const root = createRoot(el)
// root.render(<BomDia  nome="Octávio"/>)
const el = document.getElementById('root')
const root = createRoot(el)

root.render(
    <div>
        {/* <BoaTarde nome="Ana" /> */}
        {/* <Saudacao tipo="Bom dia" nome="Maria" /> */}
        <Pai nome="Paulo" sobrenome="Silva">
         {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
)

// root.render(<h1>React</h1>)

// aqui no h1, ele não e um js puro, ele é um jsx, que é uma extensão do js, que permite escrever html dentro do js, e o react transforma esse jsx em js puro
//  para o navegador entender. Acontece um transpailamento, onde o react transforma o jsx em js puro, e o navegador entende. O react é uma biblioteca para construir interfaces
// de usuário, e o jsx é uma sintaxe que permite escrever html dentro do js, e o react transforma esse jsx em js puro, e o navegador entende.