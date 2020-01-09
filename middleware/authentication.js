const User = require('../model/User')
const { verifyToken } = require('../helper/jwt')

module.exports = (req,res,next) =>{
    console.log(`
        AUTHENTICATION IS RUNNING
        =========================
    `);
    
    const decodedUser = verifyToken( req.header.token )

    User.findOne({
        _id : decodedUser._id
    })
    .then(result=>{
        if(!result)
          next({ status:404, message:'invalid token' })
        else
          {
              req.decodedUser = result
              next()
          }
    })
    .catch(err=>{
        next(err)
    })
}