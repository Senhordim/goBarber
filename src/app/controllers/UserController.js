const { User } = require('../models')

class UserController {
  index (req, res) {
    return res.send('Olá mundo!')
  }
  create (req, res) {
    return res.render('auth/signup')
  }
  async store (req, res) {
    req.body.avatar = 'test.jpg'
    console.log(req.body)
    await User.create(req.body)
    return res.redirect('/')
  }
}

module.exports = new UserController()
