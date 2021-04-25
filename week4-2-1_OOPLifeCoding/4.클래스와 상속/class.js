//객체지향 언어들이 채택하는 클래스
//원래 자바스크립트는 없었는데, 이를 다른 기존 유저들이 거부감이 없게끔 하는 방식을 채택
//그래서 클래스가 들어오게 되었다!
//ECMAScript6 버전에서 채택된 클래스!

//클래스는?? 객체를 만드는 공장이다.
//컨스트럭터는? 객체가 만들어질 때, 깔끔한 객체가 아니라 기본적인 기능도 셋팅하는 기능도 한다.

class Person{
  constructor(name, first, second){ //반드시 이 이름을 써야 한다!!!
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum(){
    return 'prototype : '+(this.first + this.second);
  } // Person.prototype이 필요없고, 단순히 sum만 넣어서 function단어도 없앤 체로 작동함
  //이 sum메소드는, 같은 클래스에 속해있는 모든 객체가 공유하는 함수가 된다!
  //결과적으로, 클래스는 기존의 컨스트럭터와 프로토타입을 합친 존재!!
  //물론 클래스 밖에 프로토타입을 설정해서 움직일 수도 있지만, 그 안에다가 쓸 수도 있음!
}


let kim = new Person('kim', 10, 20);
kim.sum = function() {
  return 'this : ' + (this.first + this.second);
}
//클래스 역시 이렇게 예외적/직접적으로 객체 자체에 sum 메소드를 할당하면 이게 먼저 실행된다.

let lee = new Person('lee', 10, 10);


console.log(kim.sum())
console.log(lee.sum())