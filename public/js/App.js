console.log('Client side JavaScript page is loaded!!!')




const weatherForm=document.querySelector('form')
const searchElement=document.querySelector('input')
const forecast=document.querySelector('#Forecast')
const locationmsg=document.querySelector('#location')
const addressMsg=document.querySelector('#address')



weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault();
    const location=searchElement.value;
    console.log(location);
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            addressMsg.textContent='Loading...'
            if(data.error)
            {
                addressMsg.textContent=data.error
            }
            else
            {
                forecast.textContent=data.forecast
                locationmsg.textContent=data.location
                addressMsg.textContent=data.address
            console.log(data.location)
            console.log(data.forecast)
            console.log(data.address)
            }
        })
        })

})