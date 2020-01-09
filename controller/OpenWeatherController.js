const axios = require('axios');

class OpenWeatherController{
    static  cityWeather(req,res,next){
        axios.get(`api.openweathermap.org/data/2.5/forecast?q=${req.params.cityname}&APPID=c2cbe47e5236ed05b5c314c584da9bef`)
        .then(data=>{
            if(data){
                res.json(data)
            }else{
                res.json({
                    message: 'city name not found'
                })
            }
        })
        .catch(err=>{
            res.json({
                message: '.....request error.....'
            })
        })
    }
}

module.exports = OpenWeatherController