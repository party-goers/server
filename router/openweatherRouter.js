const OpenWeatherController = require('../controller/OpenWeatherController')
const router = require('express').Router()


router.get('/:cityname', OpenWeatherController.cityWeather)


module.exports = router
