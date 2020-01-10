const SongkickController = require('../controller/songkick-controller')
const router = require('express').Router()

router.get('/events/city/:location', SongkickController.getEventAtLocation)
router.get('/events/:location', SongkickController.getEventsFromRegisteredLocation)

module.exports = router
