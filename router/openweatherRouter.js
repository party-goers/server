const OpenWeatherController = require('../controller/OpenWeatherController')
const router = require('express').Router()


router.get('/:cityname/:date', OpenWeatherController.cityWeather)


module.exports = router
