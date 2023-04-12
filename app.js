const express = require('express')
const https = require('https')

const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res){

    res.sendFile(__dirname+ '/index.html')
})

app.post('/', function (req,res){
    const query = req.body.cityName
const apiKey = '5435e9b3f1c329f8fb2d1ed8b66c4a6a'
const unit = 'matric'
const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ query +'&units='+ unit +'&appid='+apiKey;
https.get(url, function(response){
    console.log(response);

    response.on('data', function(data){
        const weatherData = JSON.parse(data)
        console.log(weatherData);

        const tempr = weatherData.main.feels_like
        console.log(tempr)

        const tem = weatherData.weather[0].description
        console.log(tem)
        res.write('<h1>The tempararure in '+ query + ' is ' + tempr+ ' degree</h1>')
        res.send();
        // const obj = {
        //     name: 'XXX',
        //     favFood: 'Briyani',
        // }
        // console.log(JSON.stringify(obj));
    })
})
    // console.log('Post Request For Search')
})



app.listen(8080, function(){
    console.log('Server running on port 8080');
})