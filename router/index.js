const router = require('express').Router()

router.use('/users', require('./userRouter'))
router.use('/googleApi', require('./googleApiRouter'))
router.use('/song-kick', require('./songkick-router'))

module.exports = router
