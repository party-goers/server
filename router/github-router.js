const router = require('express').Router()
const GithubController = require('../controller/github-controller')

router.get('/callback', GithubController.callback)

module.exports = router
