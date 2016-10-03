import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

require('./models/db');
require('./config/passport');


dotenv.config(); 
let routesApi = require('./routes/index'); 
//connect to mongo


let app = express();
let port = 4000;

app.use(passport.initialize());
app.use('/api', routesApi);

app.get('/', (req,res,body) => res.send('HELLO!'));



app.listen(port, function () {
  console.log(`app listening on ${port}`);
  console.log(process.env.WEATHER_KEY)
});