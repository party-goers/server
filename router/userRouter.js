const router = require('express').Router()
const UserController = require('../controller/UserController')
const googleSignIn = require('../middleware/gSignIn')

router.get('/test', UserController.test)

router.post('/googleSignIn', googleSignIn ,UserController.googleSignIn)
router.post('/callback', UserController.gitSignIn)

module.exports = router