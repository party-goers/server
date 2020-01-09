const User = require('../model/User')

class UserController
{
    static test(req,res)
      {
        res.send('hello user connected')
      }
    

    static googleSignIn(req,res,next)
      {

      }

    
    static gitSignIn(req,res,next)
      {

      }


}

module.exports = UserController