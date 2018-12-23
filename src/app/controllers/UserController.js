class UserController {
  index (req, res) {
    return res.send('Olá mundo!')
  }
  create (req, res) {
    return res.render('auth/signup')
  }
}

module.exports = new UserController()
