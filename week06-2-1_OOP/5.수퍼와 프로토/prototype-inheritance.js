let superObj = {superVal: 'super'}
let subObj = {subVal: 'sub'}
subObj.__proto__ = superObj;
//이러한 __proto__를 갖고 superObj를 subObj의 부모로 만드는 것!
// let subObj = Object.create(superObj)
//하지만 위와같이 Object.create()를 통해 상속을 할 수도 있음! 이걸 권장!

console.log(subObj.subVal); // sub
console.log(subObj.superVal); // super

//prototype과 __proto__가 헷갈릴 수 있음!
//자바스크립트 표준에서는 언더바프로토를 인정하지 않는다.
//하지만 언더바프로토를 구현해서 제공하니까 사실상 표준이다.
//그러나 상속을 할 때 3번째 줄처럼 상속하는건 좋은 방식이 아니다!

subObj.superVal = 'sub';
console.log(superObj.superVal) // super
console.log(subObj.superVal) // sub


//객체 상속의 사용 강의 필기
let kim = {
  name: 'kim',
  first:10, second:20,
  sum:function(){return this.first + this.second}
}
console.log(kim.sum()) // 30

// let lee = {
//   name: 'lee',
//   first:10, second:10,
//   avg: function() {
//     return(this.first + this.second)/2;
//   }
// }
// lee.__proto__ = kim
// console.log(lee.sum()) // 20
// //실행 시, 먼저 lee의 프로퍼티로 sum이 있는지 찾고,
// //없으면 위로 올라가서 kim에서 찾는다. 그리고 있으면 실행
// console.log(lee.avg()) //10


let lee = Object.create(kim); //권장되는 방식 - 처음부터 있는 것은 아니었음
//언더바 프로토를 쓰지말자라고 하면서 나오게 되는 방식!
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function() {
  return (this.first + this.second) /2
}
console.log(lee.sum()) //20
console.log(lee.avg()) //10
