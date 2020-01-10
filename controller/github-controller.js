const axios = require('axios')

class GithubController {
  static callback(req, res, next) {
    let access_token = null
    let user_email = null

    axios.post(`https://github.com/login/oauth/access_token`, {}, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: req.body.code
      },
      headers: {
        Accept: 'application/json'
      }
    })
      .then(({ data }) => {
        access_token = data.access_token
        return axios.get('https://api.github.com/user/emails', {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `token ${access_token}`
          }
        })
      })
      .then(({ data }) => {
        user_email = data[0].email
        return axios.get('https://api.github.com/user', {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `token ${access_token}`
          }
        })
      })
      .then(({ data }) => {
        res.json({
          email: user_email,
          token: access_token,
          username: data.login
        })
      })
      .catch(next)
  }
}

module.exports = GithubController
