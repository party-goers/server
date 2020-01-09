const router = require('express').Router()
const UserController = require('../controller/UserController')
const googleSignIn = require('../helper/gSignIn')

router.get('/test', UserController.test)

router.post('/googleSignIn', googleSignIn ,UserController.googleSignIn)
router.post('/gitSignIn', UserController.gitSignIn)


module.exports = router