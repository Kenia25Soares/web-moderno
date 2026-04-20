const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// Mini SPA: URLs (series.html / linguagens.html) servem o shell com CSS;
// o HTML parcial fica em spa/partials/ e é carregado por fetch a partir do index.
const spaIndex = path.join(__dirname, 'spa', 'index.html')
app.get('/spa/series.html', (req, res) => res.sendFile(spaIndex))
app.get('/spa/linguagens.html', (req, res) => res.sendFile(spaIndex))

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage ({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})
// app.get('/teste', (req, res) => res.send('Ok'))

const upload = multer({ storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluido com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))