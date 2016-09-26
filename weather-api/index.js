import express from 'express';
import request from 'request';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Weather from './classes/Weather'

dotenv.config();

//connect to mongo
mongoose.connect('mongodb://localhost/weather')
let db = mongoose.connection;

let app = express();
let port = 3000;

var options = {
  method: 'GET',
  uri: 'http://api.openweathermap.org/data/2.5/weather',
  qs: {
    'appid': process.env.WEATHER_KEY,
    'q': 'atlanta,ga'
  }
};

app.get('/city/:cityName', (req, resp, body) => {
  console.log('CityName', req.params.cityName);
  options.qs.q = req.params.cityName;
  request(options, (err, res, body) => {
    if (err) throw err;
    let weather = new Weather(JSON.parse(body));
    console.log(weather);
    resp.send(`weather query sent at ${weather.date}
    The weather in ${req.params.cityName} is:
    Current Temp: ${weather.temp.current}
    High Temp: ${weather.temp.current}
    Low Temp: ${weather.temp.current}
    Wind Speed: ${weather.windSpeed}
    Humidity: ${weather.humidity}
    Status: ${weather.status}
    `);
  });
});

app.listen(port, function () {
  console.log(`app listening on ${port}`);
  console.log(process.env.WEATHER_KEY)
});