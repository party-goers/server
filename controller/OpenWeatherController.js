const axios = require('axios');

class OpenWeatherController{
    static  cityWeather(req,res,next){
        const paramDate = req.params.date
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${req.params.cityname}&APPID=c2cbe47e5236ed05b5c314c584da9bef`)
        .then(({data})=>{
            if(data){
                let weatherDesc=null
                const allWeatherData = data.list
                for(let weather of allWeatherData){
                    let completeDate = weather.dt_txt
                    let date = completeDate.split(' ')
                    if(date[0]==paramDate){
                        weatherDesc = weather.weather[0].description
                    }
                }
                res.json({
                    weather: weatherDesc
                })
            }else{
                res.json({
                    message: 'city name not found'
                })
            }
        })
        .catch(err=>{
            res.json({
                message: '.....request error.....',
                err
            })
        })
    }
}

module.exports = OpenWeatherController