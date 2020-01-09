const router = require('express').Router()
const UserController = require('../controller/UserController')

router.get('/test', UserController.test)

router.post('/googleSignIn', UserController.googleSignIn)
router.post('/gitSignIn', UserController.gitSignIn)


module.exports = router