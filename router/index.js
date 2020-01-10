const router = require('express').Router()

router.use('/users', require('./userRouter'))
router.use('/googleMap', require('./googleApiRouter'))
router.use('/weather', require('./openweatherRouter'))


module.exports = router