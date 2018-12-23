const express = require('express')
const UserController = require('./app/controllers/UserController')
const HomeController = require('./app/controllers/HomeController')

const routes = express.Router()

// Home
routes.get('/', HomeController.index)

// Auth
routes.get('/signup', UserController.create)
routes.post('/signup', UserController.store)

module.exports = routes
