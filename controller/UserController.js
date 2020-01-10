const User = require('../model/User')
const customPass = require('../helper/randomPassword')
const {generateToken} = require('../helper/jwt')
const axios = require('axios')

class UserController
{
    static test(req,res)
      {
        res.send('hello user connected')
      }
    

    static googleSignIn(req,res,next){
      const { email, name } = req.decoded
          User.findOne({email})
          .then(user =>{
              if(user){
                  return user
              }else{
                  return User.create({
                      username: name,
                      email : email,
                      password: customPass
                  })
              }
          })
          .then(user =>{
              const temp = {
                  id : user._id
              }
              const token = generateToken(temp)
              res.status(200).json({
                  message: 'login success',
                  token: token,
                  user: {
                      username : user.username,
                      email : user.email
                  }
              })
          })
          .catch(err =>{
              next(err)
          })
      }

    
    static gitSignIn(req,res,next)
      {
        console.log('TCL\n ======================\n JALAN WOI 1 ')
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
          .then(data=>{
              console.log('TCL\n ======================\n JALAN WOI 2 ')
              console.log('TCL\n ======================\n', data.data)
              return User.create({
                  username: data.data.login,
                  email: user_email,
                  password : customPass
              })
          })
          .then(({ data }) => {
            res.json({
              email: user_email,
              token: access_token,
              username: data.username
            })
          })
          .catch(next)
      }

}

module.exports = UserController