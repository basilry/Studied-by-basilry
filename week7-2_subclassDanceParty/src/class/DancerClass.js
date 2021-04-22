if (typeof window === 'undefined') {
  var jsdom = require('jsdom');
  var { JSDOM } = jsdom;
  var { document } = (new JSDOM('')).window;
} // you don't have to worry about this code. this is for testing.

// dancer를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// 여기에는 Pseudoclassical에서 정의된 Dancer와 이름이 겹치므로, DancerClass라는 이름을 사용합니다.
const scripts = ['안녕?', '이게 머선129!!', '으헉!', '우리는 톰과 제리얌~', '치즈가 그래 맛있나?', '중구가 시키드나?'];
//
class DancerClass{
  constructor(top, left) {
    this.$node = this.createDancerElement();
    // this.timeBetweenSteps = 1000
    // this.step();
    this.setPosition(top,left);
  }
  createDancerElement() {
    const imgNumber = 8;
    let images = document.createElement('img');
    images.className = `dancer icon${[Math.floor(Math.random() * 8)]}`
    images.src = `cssfiles/${Math.floor(Math.random() * imgNumber) + 1}.png`;
    // let handleClickIcon = this.images.src;
    images.addEventListener('click', function handleClickIcon () {
      alert(scripts[Math.floor(Math.random() * 6)])
    });
    return images;
  }
  // step() {
  //   setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // }
  setPosition(top, left) {
    Object.assign(this.$node.style, {
      top: `${top}px`,
      left: `${left}px`
    });
  }
  render(target) {
    target.push(this)
  }
  lineup() {
    Object.assign(this.$node.style, {
      top: '100px'
    })
  }
}

// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
  module.exports = DancerClass;
}