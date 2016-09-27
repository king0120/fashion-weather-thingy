import request from 'request';
import Weather from '../classes/Weather';

export default function (app) {

  var options = {
    method: 'GET',
    uri: 'http://api.openweathermap.org/data/2.5/weather',
    qs: {
      'appid': process.env.WEATHER_KEY,
    }
  };

  app.get('/city/:cityName', (req, resp, body) => {
    console.log('CityName', req.params.cityName);
    options.qs.q = req.params.cityName;
    request(options, (err, res, body) => {
      if (err) throw err;

      resp.json(new Weather(JSON.parse(body)));
    });
  });

  app.get('/zip/:zip', (req, resp, body) => {
    console.log('Zip Code', req.params.zip);
    options.qs.zip = req.params.cityName;
    request(options, (err, res, body) => {
      if (err) throw err;
      let weather = new Weather(JSON.parse(body));

      resp.json(new Weather(JSON.parse(body)));
    });
  });

  app.get('/latLong/:lat/:lon', (req, resp, body) => {
    console.log('Lat', req.params.lat);
    console.log('Lon', req.params.lon);
    options.qs.lat = req.params.lat;
    options.qs.lon = req.params.lon;

    request(options, (err, res, body) => {
      if (err) throw err;
      let weather = new Weather(JSON.parse(body));

      resp.json(new Weather(JSON.parse(body)));
    });
  });

}