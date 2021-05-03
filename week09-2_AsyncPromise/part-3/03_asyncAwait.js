var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

async function getNewsAndWeatherAsync() {
  let data1 = await fetch(newsURL).then(response => response.json())
  let data2 = await fetch(weatherURL).then(response => response.json())

  return {news:data1.data, weather:data2}
}
if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}