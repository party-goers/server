const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: true
    },
    email: {
        type: String,
        required : [true, 'you must enter your email'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please enter a valid email'],
        validate : {
            validator : function(v) {
                return User.findOne({
                    email : v
                }).then(user => {
                    if (user) {
                        return false
                    } else {
                        return true
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            msg : `email already registered`
        }
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }

})



const User = mongoose.model('User', userSchema)
module.exports = User