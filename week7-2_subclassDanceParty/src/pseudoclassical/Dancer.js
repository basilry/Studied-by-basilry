if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
} // you don't have to worry about this code. this is for testing.

// Dancer를 pseudoclassical한 방식으로 리팩토링하세요
// 참고로, constructor는 대문자로 이름을 시작하는 것이 관례입니다
function Dancer(top, left, timeBetweenSteps) {
  // const createDancerElement = () => {
  //   let elDancer = document.createElement('span');
  //   elDancer.className = 'dancer';
  //   return elDancer;
  // };
  // this.top = top;
  // this.left = left;
  this.$node = this.createDancerElement();
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
}

Dancer.prototype.createDancerElement = function() {
    let elDancer = document.createElement('span');
    elDancer.className = 'dancer';
    return elDancer;
  };
Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
} //내부 프로퍼티를 손실없이 가져오기 위해 bind를 사용!
Dancer.prototype.setPosition = function(top, left) {
  Object.assign(this.$node.style, {
    top: `${top}px`,
    left: `${left}px`
  });
}
Dancer.prototype.render = function(target) {
  target.push(this)
}
Dancer.prototype.lineup = function() {
  Object.assign(this.$node.style, {
    top: '100px'
  })
}


// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = Dancer;
}
