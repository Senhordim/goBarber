const express = require('express')
const UserController = require('./app/controllers/UserController')

const routes = express.Router()

routes.get('/', UserController.index)
routes.get('/signup', UserController.create)

module.exports = routes
