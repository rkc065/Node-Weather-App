const request = require('request')

const geocode = (address, callback) => {
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' +encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoicm9iaW4ta2MiLCJhIjoiY2tvcmFvcGd4MGNuODJ2b2h1dXZ4dDU0biJ9.x6kLnatb9IYnoaJqZL0hCQ'
    request({url,json:true},(error,{body}) =>{
        if(error)
    {
        callback("Unable to load the location");
    }
    else if (body.message || body.features.length === 0)
    {
        callback("Unable to find the  location!!");
    }
    else
    {
        callback(undefined,{
            Longitude:body.features[0].center[0],
            Latitude:body.features[0].center[1],
            location:body.features[0].place_name
            

        })
    }
    })
    
    //console.log('hello');
}
// geocode('ranchi',(error,data)=>{
//     console.log('Error',error);
//     console.log('data' ,data);
// })
module.exports= geocode;