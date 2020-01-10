const router = require('express').Router()
const GoogleApiController = require('../controller/GoogleApiController')
const authorization = require('../middleware/authorization')


router.get('/test', GoogleApiController.test)
router.post('/', GoogleApiController.getPlaceId)


module.exports = router