const router = require('express').Router()
const GithubController = require('../controller/github-controller')
// const UserController = require('../controller/UserController')

router.post('/callback', GithubController.callback)
// router.post('/callback', UserController.gitSignIn)

module.exports = router
