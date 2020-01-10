const router = require('express').Router()
const GithubController = require('../controller/github-controller')

router.post('/callback', GithubController.callback)

module.exports = router
