const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))  // vai retornar uma função middleware

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

// app.get('/produtos', (req, res, next)  => {
//     res.send({ nome: 'Notebook', preco: 123.45})  // Converter para JSON
// })

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))  // Parametros vem da Requisição
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})

// Estava dando um erro, solução foi usar bodyParser:
// --> A importação do bodyParser continua a mesma:

// const bodyParser = require('body-parser');
// E na hora de usar, seria algo como:

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));