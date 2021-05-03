// const BlinkyDancerClass = require("./BlinkyDancerClass");

/* eslint-disable */
const dancers = [];
// const scripts = ['안녕?', '이게 머선129!!', '으헉!', '우리는 톰과 제리얌~', '치즈가 그래 맛있나?', '중구가 시키드나?'];
const tomjerrys = document.querySelector('.tomjerrys')

function handleClickDancerButton () {
  let dancer = new BlinkyDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random()
    // Math.random() * 1000
  );
  dancer.render(dancers);
  document.body.appendChild(dancer.$node);
}

function handleClicklineupButton () {
  for(let i = 0; i < dancers.length; i++) {
    dancers[i].lineup()
  }
}

function handleClickspreadButton () {
  for(let el of dancers) {
    el.setPosition(document.body.clientHeight * Math.random(), document.body.clientWidth * Math.random()) //셋포지션 다시 맥임
  }
}


function handleDeleteButton () {
    location.reload()
}

// function handleClickIcon () {
//   alert(scripts[Math.floor(Math.random() * 6)])
// }

window.addEventListener('DOMContentLoaded', () => {
  const elAddDancerButton = document.querySelector('.addDancerButton');
  elAddDancerButton.addEventListener('click', handleClickDancerButton);
});
window.addEventListener('DOMContentLoaded', () => {
  const ellineupButton = document.querySelector('.lineup');
  ellineupButton.addEventListener('click', handleClicklineupButton);
});
window.addEventListener('DOMContentLoaded', () => {
  const elSpreadButton = document.querySelector('.spread');
  elSpreadButton.addEventListener('click', handleClickspreadButton);
});
window.addEventListener('DOMContentLoaded', () => {
  const elDeleteButton = document.querySelector('.delete');
  elDeleteButton.addEventListener('click', handleDeleteButton);
});

