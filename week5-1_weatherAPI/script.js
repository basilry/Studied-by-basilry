let data 
// = {
//   "coord": {
//     "lon": -122.08,
//     "lat": 37.39
//   },
//   "weather": [
//     {
//       "id": 800,
//       "main": "Clear",
//       "description": "clear sky",
//       "icon": "01d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 282.55,
//     "feels_like": 281.86,
//     "temp_min": 280.37,
//     "temp_max": 284.26,
//     "pressure": 1023,
//     "humidity": 100
//   },
//   "visibility": 16093,
//   "wind": {
//     "speed": 1.5,
//     "deg": 350
//   },
//   "clouds": {
//     "all": 1
//   },
//   "dt": 1560350645,
//   "sys": {
//     "type": 1,
//     "id": 5122,
//     "message": 0.0139,
//     "country": "US",
//     "sunrise": 1560343627,
//     "sunset": 1560396563
//   },
//   "timezone": -25200,
//   "id": 420006353,
//   "name": "Mountain View",
//   "cod": 200
// }
let API_URL_OpenWeatherMap = 'http://api.openweathermap.org/data/2.5/weather?q={city name}&appid=aa505028cd8fe7825b8749cb42a93954';
let input = document.querySelector('input');
function getData() {
  let written = input.value.toLowerCase();
  let changed = API_URL_OpenWeatherMap.replace('{city name}', written);
  fetch(changed) // 날씨 데이터를 가져온다 - 링크 갖고오고
  .then(function(resp) { // 정보로 함수실행
    return resp.json() // 리스폰스 - 링크객체 >> 제이슨이라는 키의 밸류 함수를 실행
  })
  .then(function(json) { // 제이슨에 위의 내용이 담긴다.
    // console.log(json)  // 제이슨을 어떻게 써먹을지 표현식으로 적는다.
    data = json;
    return data;
  });
}
function removeChild() {
  let weatherview = document.querySelectorAll('#weatherview > div');
  for(let i = 0; i < weatherview.length; i++){
    if(weatherview[i].firstChild){
      weatherview[i].removeChild(weatherview[i].firstChild);
    }
  }
}
function renderWeatherData() {
  console.log(data);
  let cityname = document.querySelector('#cityname');
  let cityweather = document.querySelector('#cityweather');
  let celcius = document.querySelector('#celcius');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  let span3 = document.createElement('span');
  span1.textContent = data.name;
  cityname.append(span1);
  span2.textContent = data.weather[0].main;
  cityweather.append(span2);
  span3.textContent = (data.main.temp - 273.15).toFixed(1) + '°C';
  celcius.append(span3);
}
function changeImage() {
  let imgLink = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let icon = document.querySelector('#icon')
  let image = document.createElement('img');
  image.setAttribute('src', imgLink);
  icon.append(image)
}
function handlerefresher() {
  removeChild();
  renderWeatherData();
  changeImage();
}
const button = document.querySelector('button');
input.addEventListener('keyup', getData);
button.addEventListener('click', handlerefresher);