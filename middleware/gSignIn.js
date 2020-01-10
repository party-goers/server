const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client('479839042545-b8nf6rjgaa6ajbovtjo7kmnci9qm0n09.apps.googleusercontent.com')

module.exports = (req, res, next) => {
    if(!req.headers.id_token )
      {
        next({status: 406, message: 'token not provided'})
      }

    client.verifyIdToken({
        idToken: req.headers.id_token,
        audience: '479839042545-b8nf6rjgaa6ajbovtjo7kmnci9qm0n09.apps.googleusercontent.com',      
    })
    .then( ticket => {
        const payload = ticket.getPayload();
        req.decoded = payload  
        next()  
    })
    .catch(err => {
        console.log(err)
    })   
}