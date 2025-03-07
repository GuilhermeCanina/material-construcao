const express = require('express')
const routes = express.Router()
const controllerclientes = require('./controller/controllerclientes')
const controllerfuncionarios = require('./controller/controllerfuncionarios')
const controllerprodutos = require('./controller/controllerprodutos')

routes.get('/clientes', controllerclientes.read)
routes.post('/clientes', controllerclientes.create)
routes.put('/clientes', controllerclientes.update)
routes.delete('/clientes/:id', controllerclientes.del)

//funcionarios
routes.get('/funcionarios', controllerfuncionarios.read)
routes.post('/funcionarios', controllerfuncionarios.create)
routes.put('/funcionarios', controllerfuncionarios.update)
routes.delete('/funcionarios/:id', controllerfuncionarios.del)

//produtos
routes.get('/produtos', controllerprodutos.read)
routes.post('/produtos', controllerprodutos.create)
routes.put('/produtos/:id', controllerprodutos.update)
routes.delete('/produtos/:id', controllerprodutos.del)

module.exports = routes