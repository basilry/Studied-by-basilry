function Person(name, first, second, third) {
  this.name= name,
  this.first= first,
  this.second= second
}

Person.prototype.sum= function(){
  return 'prototype : '+(this.first + this.second);
}
// Person이라고 하는 함수에 sum이라는 함수의 원형을 정한다
//이렇게 하면 Person이라는 함수가 실행될 때마다 sum함수가 실행되지 않는다
// 한번만 실행된다. 한번만 정의된다. 성능 상승, 메모리 절약.
// 1억개의 객체가 하나의 함수를 쉐어하는 것이다


let kim = new Person('kim', 10, 20);
kim.sum = function() {
  return 'this : ' + (this.first + this.second);
} // 이렇게 일부를 바꿀 수 있음!! 하지만 기본적인 형식은 위의 '프로토타입 : '내용
//프로토타입의 특징??
//자바스크립트는, kim이라는 객체의 sum이라는 메소드를 호출 할때,
//1. 객체 자기자신이 sum의 속성을 가지고 있는지 찾는다. 그래서 kim은 this가 나오는 것
//2. 하지만 lee는 갖고 있지 않으니 Person의 프로토타입의 sum 메소드가 있는지 찾는다.
//3. 그래서 그걸 찾으면 해당 메소드를 실행한다.
//*결 : 일반적으로 속성(데이터들, 변수들)은 생성자 함수 안에 넣는게 일반적이고,
//물론 프로토타입도 쓸 수 있다.
//함수는 특별한 이유가 있지 않다면, 그 생성자 함수의 '프로토타입.함수의 이름' 을 실행한다.
//이것이 일반적으로 컨스트럭터를 이용해서 객체를 생성할 때 사용하는 일종의 패턴

//질문
//1. 프로토타입이란 어떤 의미를 갖나?
//2. 프로토타입을 사용하지 않고 생성자 함수 안에서 메소드나 속성을 직접 정의하면 어떤 비효율이 발생하나?
//3. 그리고 그 비효율을 어떻게 프로토타입을 통해 해결하였는가?


let lee = new Person('lee', 10, 10);

console.log(kim.sum());
console.log(lee.sum());



// kim.sum = function() {
//   return 'modifed : '+(this.first + this.second);
// }
//(1)이렇게 생성자 안에서 메소드를 만드는 것이 갖는 단점임
//생산성이 많이 떨어진다. 그래서 프로토타입이 필요한 것!!