const router = require('express').Router()
const GoogleApiController = require('../controller/GoogleApiController')


router.get('/test', GoogleApiController.test)
router.post('/', GoogleApiController.getPlaceId)


module.exports = router