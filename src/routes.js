const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

// Home
routes.get('/', SessionController.create)
routes.post('/signin', SessionController.store)

// Auth
routes.get('/signup', UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

// App
routes.use('/app', authMiddleware)

// Dashboard
routes.get('/app/dashboard', (req, res) => {
  console.log('-->', req.session.user)
  res.render('dashboard')
})

module.exports = routes
