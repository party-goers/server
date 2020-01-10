const router = require('express').Router()

router.use('/users', require('./userRouter'))
router.use('/googleMap', require('./googleApiRouter'))

module.exports = router