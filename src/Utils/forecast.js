const request = require('request')

const forcast=(latitude,longitude,callback)=>{
const url='http://api.weatherstack.com/current?access_key=0c82c9e2699c46d3f61a85aad042f836&query='+latitude+ ',' + longitude +''

request({url,json:true},(error,{body})=>{

    if(error)
    {
        callback('Unabe to load the weather!!')
    }
    else if(body.error)
    {
    callback("Location Not found");
    }
    else
    {
        callback(undefined,body.current.weather_descriptions[0]+ " Current temprature is "+ body.current.temperature +" Degree out and It feels like " +body.current
        .feelslike)
    }
})

}
module.exports= forcast;