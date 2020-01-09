const router = require('express').Router()

router.use('/users', require('./userRouter'))
router.use('/googleApi', require('./googleApiRouter'))

module.exports = router