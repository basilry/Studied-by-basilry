// const BlinkyDancer = require("./BlinkyDancer");

/* eslint-disable */
const dancers = [];

function handleClickDancerButton () {
  /* makeBlinkyDancer is the dancer maker functions available in global scope.
  * A new object of the given type will be created and added
  * to the stage.
  */

let dancer = new BlinkyDancer(
  document.body.clientHeight * Math.random(),
  document.body.clientWidth * Math.random(),
  Math.random() * 1000
  );
  dancer.render(dancers);
document.body.appendChild(dancer.$node);
}

function handleClicklineupButton () {
  for(let i = 0; i < dancers.length; i++) {
    dancers[i].lineup()
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const elAddDancerButton = document.querySelector('.addDancerButton');
  elAddDancerButton.addEventListener('click', handleClickDancerButton);
});
window.addEventListener('DOMContentLoaded', () => {
  const ellineupButton = document.querySelector('.lineup');
  ellineupButton.addEventListener('click', handleClicklineupButton);
});
