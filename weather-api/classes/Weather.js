export default class Weather {
  constructor(res){
    this.temp = {
      current: res.main.temp,
      low: res.main.temp_min,
      high: res.main.temp_max
    },
    this.windSpeed = res.wind.speed,
    this.humidity = res.main.humidity,
    this.rainChance = 'unknown',
    this.description = res.weather.description,
    this.date = new Date();
  }
}