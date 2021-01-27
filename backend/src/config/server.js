const port = 3000

const bodyParser = require('body-parser') //Faz o parser das informações recebidas da requisição, transforma em json ou em string
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`Backend está rodando na porta ${port}`);
})

module.exports = server