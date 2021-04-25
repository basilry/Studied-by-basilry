//객체지향 언어들이 채택하는 클래스
//원래 자바스크립트는 없었는데, 이를 다른 기존 유저들이 거부감이 없게끔 하는 방식을 채택
//그래서 클래스가 들어오게 되었다!
//ECMAScript6 버전에서 채택된 클래스!

function Person(name, first, second) {
  this.name= name,
  this.first= first,
  this.second= second
}

Person.prototype.sum= function(){
  return 'prototype : '+(this.first + this.second);
}
//Person이라는 constructor(생성자 함수)를 통해 만들어진 모든 객체는,
//prototype의 property에 해당하는 sum이라고 하는 함수를 공유한다.


let kim = new Person('kim', 10, 20);
kim.sum = function() {
  return 'this : ' + (this.first + this.second);
}
let lee = new Person('lee', 10, 10);
console.log(kim.sum());
console.log(lee.sum());
console.log(kim)