const router = require('express').Router()

router.use('/users', require('./userRouter'))
router.use('/googleApi', require('./googleApiRouter'))
router.use('/github', require('./github-router'))

module.exports = router
