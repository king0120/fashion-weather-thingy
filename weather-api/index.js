import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes/weatherRoutes';


dotenv.config();

//connect to mongo
mongoose.connect('mongodb://localhost/weather')
let db = mongoose.connection;

let app = express();
let port = 3000;

app.use(cors());


app.get('/', (req,res,body) => res.send('HELLO!'));
routes(app);


app.listen(port, function () {
  console.log(`app listening on ${port}`);
  console.log(process.env.WEATHER_KEY)
});