const axios = require('axios')
const { getCurrentDate, getFiveDaysLater } = require('../helper/song-kick-helper')

class SongkickController {
  static getEvents(req, res, next) {
    axios.get(`https://api.songkick.com/api/3.0/metro_areas/29154/calendar.json?apikey=${process.env.SONGKICK_API}&min_date=${getCurrentDate()}&max_date=${getFiveDaysLater()}`)
      .then(({ data }) => {
        res.json(data)
      })
      .catch(next)
  }
}

module.exports = SongkickController
