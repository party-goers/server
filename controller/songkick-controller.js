class SongkickController {
  static getEvents(req, res, next) {
    console.log(process.env.SONGKICK_API)
    res.json({ message: 'welcome to get event routes' })
  }
}

module.exports = SongkickController
