const User = require('../model/User')
const customPass = require('../helper/randomPassword')
const {generateToken} = require('../helper/jwt')

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

      }


}

module.exports = UserController