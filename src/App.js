const path=require('path');
const express = require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const app = express()

const port=process.env.PORT || 2000
// Define paths for Express config

const public_dir_path=path.join(__dirname,'../public')
const view_directory=path.join(__dirname,'../templates/views')
const partial_dir=path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',view_directory)
hbs.registerPartials(partial_dir)

app.use(express.static(public_dir_path))
app.get('',(req,res)=>{
    res.render('index',{
        title:'This is index page',
        name:'Robin Kumar'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'This is about page',
        message:'Prepare for an interview with millions of articles and courses designed by experts.',
        name:'Robin KC'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'This is help page',
        message:'HelpNDoc is a modern help authoring tool with an intuitive user interface. Write or import your content and produce more than 8 documentation formats including help files, web sites, user manuals, documents, Markdown, eBooks…',
        name:'RKC'
    })
})


app.get('/weather',(req,res)=>{
    console.log(req.query)
    if(!req.query.address)
    {
       return  res.send("Please provide the Address")
    }


    geocode(req.query.address,(error,{Longitude,Latitude,location}={})=>{
             if(error)
             {
                 return res.send({error})
             }
        
             forecast(Latitude,Longitude,(error,forecastData)=>{
                 if(error)
                 {
                     return res.send({error})
                 }
                 res.send({
                    forecast: forecastData,
                    location:location,
                    address:req.query.address
                 })
             })
    })

})





app.get('/help/*',(req,res)=>{
    res.render('404',{
    title:'Error 404 Page Not Found',
    name:'Robin',
    ErrorMessage:'This help page is not available currently!!'
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
    title:'Error 404 Page Not Found',
    name:'Robin',
    ErrorMessage:'The page you are looking for is not present 404'
    })
})


app.listen(port, () => {
    console.log('server is up on port'+port)
})