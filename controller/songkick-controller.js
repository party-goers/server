const axios = require('axios')
const { getCurrentDate, getFiveDaysLater, getPhoto, urlPhoto } = require('../helper/song-kick-helper')

class SongkickController {
  static getEventsFromRegisteredLocation(req, res, next) {
    const areaId = {
      coachella: 11086,
      jakarta: 29154,
      london: 24426,
      bali: 29138,
      seoul: 30784,
    }

    let response = null

    const location = areaId[req.params.location]

    if (!location) return next({ name: 'SongkickError', message: 'Location not found' })

    axios.get(`https://api.songkick.com/api/3.0/metro_areas/${location}/calendar.json?apikey=${process.env.SONGKICK_API}&min_date=${getCurrentDate()}&max_date=${getFiveDaysLater()}`)
      .then(({ data }) => {
        let photos = data.resultsPage.results.event.map(event => {
          return getPhoto(event.uri)
        })
        response = data
        return Promise.all(photos)
      })
      .then(results => {
        response.resultsPage.results.event = response.resultsPage.results.event.map((event, i) => {
          event.imgSrc = urlPhoto(results[i])
          return event
        })

        res.json(response)
      })
      .catch(next)
  }

  static getEventAtLocation(req, res, next) {
    axios.get(`https://api.songkick.com/api/3.0/search/locations.json?query=${req.params.location}&apikey=${process.env.SONGKICK_API}`)
      .then(({ data }) => {
        if (!data.resultsPage.results.location) {
          next({ name: 'SongKickError', message: 'Location not found' })
        } else {
          let location = data.resultsPage.results.location[0].metroArea.id
          return axios.get(`https://api.songkick.com/api/3.0/metro_areas/${location}/calendar.json?apikey=${process.env.SONGKICK_API}&min_date=${getCurrentDate()}&max_date=${getFiveDaysLater()}`)
        }
      })
      .then(({ data }) => {
        let photos = data.resultsPage.results.event.map(event => {
          return getPhoto(event.uri)
        })
        response = data
        return Promise.all(photos)
      })
      .then(results => {
        response.resultsPage.results.event = response.resultsPage.results.event.map((event, i) => {
          event.imgSrc = urlPhoto(results[i])
          return event
        })

        res.json(response)
      })
      .catch(next)
  }
}

module.exports = SongkickController
