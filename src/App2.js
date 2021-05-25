const geocode=require('./Utils/geocode.js')
const forcast=require('./Utils/forecast.js')
// geocode('Jamshedpur',(error,data)=>{
//     console.log('Error',error);
//     console.log('data' ,data);
// })


const address_v=process.argv[2];
if(!address_v)
{
    console.log('Please Provide the address!!');

}
else
{
    console.log(address_v)
geocode(address_v,(error,{Longitude,Latitude,location})=>{
    if(error)
    {
        return console.log(error)
    }
    

    forcast(Latitude,Longitude,(error,Forecastdata)=>{
        if(error)
        {
            return console.log(error);
        }
        console.log(location)
        console.log(Forecastdata);
    })
})
}

