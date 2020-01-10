const axios = require('axios')

class GoogleApiController
{
    static test(req,res,next)
      {
        res.send('hello google api connected')

      }


    static getPlaceId(req,res,next)
      {
        const { venueName, lat, long } = req.body
        console.log('TCL\n ======================\n', process.env.GMAP_API)
        axios({
          method:'get',
          url: `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${process.env.GMAP_API}&input=${venueName}&inputType=textquery&location=${lat},${long}`
        })
        .then(result=>{
        console.log("TCL: result", result)
          
            res.status(200).json({ placeId : result.data.results[0].place_id})
        })
        .catch(err=>{
            next(err)
        })
      }


}

module.exports = GoogleApiController