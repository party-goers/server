if(process.env.NODE_ENV === 'development')
{
    require('dotenv').config()
    require('./config/mongo')
}

const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./router')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(require('morgan')('combined'))

app.use(require('./router'))
app.use(require('./middleware/errorHandler'))

app.use('/',routes)

module.exports = app