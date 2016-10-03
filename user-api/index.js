import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

require('./models/db');
require('./config/passport');


dotenv.config(); 
let routesApi = require('./routes/index'); 

let app = express();
let port = 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.get('/', (req,res,body) => res.send('HELLO!'));
// [SH] Use the API routes when path starts with /api
app.use('/api', routesApi);



app.listen(port, function () {
  console.log(`app listening on ${port}`);
  console.log(process.env.JWT_TOKEN)
});