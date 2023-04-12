const express = require('express')
const https = require('https')

const app = express();

app.get('/', function (req, res){

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Oslo&units=metric&appid=5435e9b3f1c329f8fb2d1ed8b66c4a6a';
    https.get(url, function(response){
        console.log(response);

        response.on('data', function(data){
            const weatherData = JSON.parse(data)
            console.log(weatherData);

            const temp = weatherData.main.temp
            const weatherDes = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imGeURL = 'https://api.openweathermap.org/img/wn' + icon + '@2x.png'
            res.write('<h1>The Temperature in Oslo is' + temp + 'degree cel </h1>');
            res.write('<h1>Weather is like' + weatherDes + 'this </h1>')
            res.write("<img src=" +imGeURL +">")
            res.send()
            const tempr = weatherData.main.feels_like
            console.log(tempr)

            const tem = weatherData.weather[0].description
            console.log(tem)
            // const obj = {
            //     name: 'XXX',
            //     favFood: 'Briyani',
            // }
            // console.log(JSON.stringify(obj));
        })
    })
})

app.listen(8080, function(){
    console.log('Server running on port 8080');
})