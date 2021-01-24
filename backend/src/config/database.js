const mongoose = require('mongoose') //Faz o mapeamento dos objetos js e realiza a conexão com o MongoDB
mongoose.Promise = global.Promise //Faz a api promise do mongoose utilizar a api do node, somente para tirar msg de advertencia

module.exports = mongoose.connect('mongodb://localhost/todo')

