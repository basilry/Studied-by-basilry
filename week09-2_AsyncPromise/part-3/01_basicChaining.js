const { response } = require("express");

var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  let obj = {};
  
  return fetch(newsURL)
  .then(response => response.json())
  .then(data => {
      obj.news = data.data; // data라고만 하면 실행이 안된다! news의 데이터가 배열안에 담겨있어서..?
      return fetch(weatherURL);
    })
    .then(response => response.json())
    .then(data => {
      obj.weather = data;
      return obj;
    })


  // return fetch(newsURL) // 2번방식
  // .then(response1 => response1.json())
  // .then(json => {
  //   obj.news = json.data;
  //   return fetch(weatherURL);
  // })
  // .then(response2 => response2.json())
  // .then(json => {
  //   obj.weather = json;
  //   return obj;
  // })

  // return fetch(newsURL) // 1번방식
  // .then(response => response.json())
  // .then(json => console.log(json.data))
  // .then(weatherURL => {
  //   return fetch(weatherURL)
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  //   .catch(error => console.log(error))
  // })
  // .catch(error => console.log(error))
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}




// return function(user1)
// .then(() => {
//   let dat03;
//   return function()
//   .then(() => {
//     let dat04;
//     dat03 + dat04;
//   })
// })