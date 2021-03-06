const { User } = require('../models')

class SessionController {
  async create (req, res) {
    res.render('auth/signin')
  }

  async store (req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    if (!user) {
      console.log(`Usuario com email: ${email} não encontrado`)
      return res.redirect('/')
    }

    if (!(await user.checkPassword(password))) {
      console.log('Senha invalida!')
      return res.redirect('/')
    }

    req.session.user = user

    return res.redirect('/app/dashboard')
  }
}

module.exports = new SessionController()
