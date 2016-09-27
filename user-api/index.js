import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
dotenv.config();

//connect to mongo
// mongoose.connect('mongodb://localhost/weather')
// let db = mongoose.connection;

let app = express();
let port = 4000;

app.get('/', (req,res,body) => res.send('HELLO!'));



app.listen(port, function () {
  console.log(`app listening on ${port}`);
  console.log(process.env.WEATHER_KEY)
});