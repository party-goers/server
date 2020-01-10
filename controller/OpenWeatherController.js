const axios = require('axios');

class OpenWeatherController{
    static  cityWeather(req,res,next){
        const paramDate = req.params.date
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${req.params.cityname}&APPID=${process.env.OPENWEATHER_API}`
        axios.get(url)
        .then(({data})=>{
            if(data){
                let weatherData = null
                const allWeatherData = data.list
                for(let i=0;i<allWeatherData.length;i++){
                    let completeDate = allWeatherData[i].dt_txt
                    let date = completeDate.split(' ')
                    if(date[0]==paramDate){
                        weatherData = allWeatherData[1].weather[0].description
                    }
                }
                res.json({
                    weather: weatherData
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