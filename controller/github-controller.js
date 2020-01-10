const axios = require('axios')

class GithubController {
  static callback(req, res, next) {
    let access_token = null

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
        res.json({ access_token, email: data[0].email })
      })
      .catch(next)
  }
}

module.exports = GithubController
