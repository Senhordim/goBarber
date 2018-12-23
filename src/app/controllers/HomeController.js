class HomeController {
  index (req, res) {
    return res.render('home/index')
  }
}
module.exports = new HomeController()
