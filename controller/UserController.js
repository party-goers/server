const User = require('../model/User')

class UserController
{
    static test(req,res)
      {
        res.send('hello user connected')
      }
    

    static googleSignIn(req,res,next){
          const { email } = req.decoded
          User.findOne({email})
          .then(user =>{
              if(user){
                  return user
              }else{
                  return User.create({
                      email : email,
                      password: email + process.env.CUSTOM_PASS
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