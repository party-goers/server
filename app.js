if(process.env.NODE_ENV === 'development')
{
    require('dotenv').config()
    require('./config/mongo')
}

const express = require('express')
const app = express()
<<<<<<< HEAD
const cors = require('cors')
=======
const routes = require('./router')
<<<<<<< HEAD
>>>>>>> weather
=======
const cors = require('cors')
>>>>>>> resolved conflict

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(require('morgan')('combined'))
<<<<<<< HEAD
=======
app.use('/', routes)
>>>>>>> get weather data

app.use(require('./router'))
app.use(require('./middleware/errorHandler'))



module.exports = app