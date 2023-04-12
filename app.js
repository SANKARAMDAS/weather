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
    res.send('Server is Up');
})

app.listen(8080, function(){
    console.log('Server running on port 8080');
})