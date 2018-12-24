class PagesController {
  home (req, res) {
    return res.render('pages/home')
  }
}
module.exports = new PagesController()
