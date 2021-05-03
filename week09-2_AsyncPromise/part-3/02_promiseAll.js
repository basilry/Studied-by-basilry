// const { response } = require("express");

var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  return Promise.all([ // 첫 번째 방식 - 통과
    fetch(newsURL).then(response => response.json()),
    fetch(weatherURL).then(response => response.json())
  ])
  .then(data => {
    let obj = {};
    obj = {news: data[0].data, weather: data[1]}
    return obj;
  })

//   return Promise.all([ // 두 번째 방식 - 통과
//   fetch(newsURL).then(response => response.json()),
//   fetch(weatherURL).then(response => response.json())
// ])
// .then((data) => {
//   return {news: data[0].data, weather: data[1]}
// })

// return Promise.all([ // 세 번째 방식 - 통과
//   fetch(newsURL),fetch(weatherURL)
// ]).then(([news,weather]) => Promise.all([news.json(),weather.json()]))
// .then(([json1,json2]) => {
//   return {news: json1.data,weather:json2}
// })
}


if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}