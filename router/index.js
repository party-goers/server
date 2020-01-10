const router = require('express').Router()

router.use('/users', require('./userRouter'))
router.use('/github', require('./github-router'))
router.use('/googleMap', require('./googleApiRouter'))
router.use('/weather', require('./openweatherRouter'))
router.use('/song-kick', require('./songkick-router'))


module.exports = router
