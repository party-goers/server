const SongkickController = require('../controller/songkick-controller')
const router = require('express').Router()

router.get('/', SongkickController.getEvents)

module.exports = router
