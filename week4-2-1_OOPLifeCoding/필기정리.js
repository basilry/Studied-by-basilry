
//<1>. new를 붙이는 이유와 과정

console.log(Date)
// 위와 같이 함수를 그냥 호출하면 그냥 함수라고 나온다.

let d1 = new Date(); 
console.log(d1.getFullYear());
console.log(d1.getMonth());
console.log(new Date)
// 하지만 new를 갖고 데이트를 선언하는 순간,
// 프로그램 내부적으로 해당 날짜를 가진 객체가 생성된다!
// 물론 이 Date라는 친구 안에 어떤 설계도를 가지고 있는지 모를 수 밖에 없다.
// 어차피 Date는 자바스크립트에 내장된 메소드이기 때문에.





//<2>. new를 붙인 일반 함수가 constructor(생성자 함수)가 되려면?

function Person(name, first, second, third) {
  this.name= name,
  this.first= first,
  this.second= second,
  this.third= third,
  this.sum= function(){
    return this.first + this.second + this.third;
  }
}
let kim = new Person('kim', 10, 20, 30);
console.log(kim.sum());
// 하지만 이렇게 Person이라는 임의의 함수 앞에 new를 붙이면 이 함수는 더이상 일반적인 함수가 아니라,
// 객체를 생성하는 생성자가 된다. 영어로 constructor! 맥락적으로 생성자 함수!

// 결과적으로, 컨스트럭터(생성자) 함수를 만든다! 라는 것은?

// (0)일반적인 함수를 new를 앞에 붙여 객체적인 의미가 있는 함수로 만든 뒤에
// (1)해당 함수의 파라미터를 임의로 설정하고
// // name, first, seconde, third..같은
// (2)해당 함수 내 객체의 키값(파라미터) 앞에 this.를 붙이고,
// // this.name
//     this는?? : 그 디스가 속해있는 메소드가 속해있는 객체를 가르키도록 약속된 특수한 예약어, 특수한 약속
//     >> 이는 결과적으로 나 자신(객체)을 호출하는 것!!
// (3)객체의 키값과 대응하는 밸류값에 파라미터를 직접적으로 이콜(=) 설정하면 양산형 공장을 만들어 낼 수 있다.
// // this.name = name
// (4)그 후 이러한 파라미터에 대응하는 값들을 넣는 개별변수를 설정하면,
// // let kim = new Person('kim', 10, 20, 30)
// (5)위 생성자 함수를 통해 개별변수들에 상응하는 값이 도출된다.
// // console.log(kim.sum())

// *이렇게 컨스트럭터가 하는 결과가 무엇인지 정리해보자면,
// 1. 객체를 만든다
// 2. 그 객체의 초기상태를 세팅한다





//<3>. prototype을 만드는 이유와 과정 그리고 특징

// 그런데!!
// 이렇게 생성자 함수 안에 함수를 만들어서 각 변수가 삽입될 때마다 해당 sum 함수가 계속 실행되게 된다면..
// 이는 객체가 급격히 많아질 때 감당할 수 없는 메모리 사용과 함께 성능 낭비를 초래하게 된다.

function Person(name, first, second, third) {
  this.name= name,
  this.first= first,
  this.second= second
}

Person.prototype.sum= function(){
  return 'prototype : '+(this.first + this.second);
}
// 즉, 이렇게 Person이라고 하는 생성자 함수에 sum이라는 함수의 원형(프로토타입)을 정하고,
// 이를 통해 Person이라는 함수가 실행될 때마다 sum함수가 실행되지 않게 한다.
// 한번만 실행되고 정의된다. 성능 상승, 메모리 절약. 1억개의 객체가 존재한다면 이 하나의 함수를 쉐어하는 것이다

// 물론 맘에 안드는 경우, 특정적인 변수에 대한 함수변경이 가능하다
let kim = new Person('kim', 10, 20);
kim.sum = function() {
  return 'this : ' + (this.first + this.second);
} 
// 이렇게 일부를 바꿀 수 있음!! 하지만 기본적인 형식은 위의 프로토타입을 만들어
// 그 생성자 함수의 원형 함수를 통해 도출되는 것이다.
let lee = new Person('lee', 10, 10);

console.log(kim.sum());
console.log(lee.sum());

// 그렇다면 결과적으로 프로토타입의 특징은 무엇일까?
// 자바스크립트는, kim이라는 객체가 new Person을 생성자함수로 선언하여 갖고있는 sum이라는 메소드를 호출 할때,
// 1. 객체 자기자신이 sum의 속성을 가지고 있는지 찾는다. 그래서 kim은 this가 나오는 것
// 2. 하지만 lee는 갖고 있지 않으니 생성자함수인 Person으로 올라가, 프로토타입의 sum 메소드가 있는지 찾는다.
// 3. 그래서 그걸 찾으면 해당 메소드를 실행한다.

// *결 : 일반적으로 속성(데이터들, 변수들)은 생성자 함수 안에 넣는게 일반적이지만, 프로토타입도 쓸 수 있다.
// 함수는 특별한 이유가 있지 않다면, 그 생성자 함수의 prototype.<func name> 을 실행한다.
// 이것이 일반적으로 컨스트럭터를 이용해서 객체를 생성할 때 사용하는 일종의 패턴


//여기까지 대략적인 정리를 하자면..
//<일반적인 함수(파라미터 설정) + this = 생성자함수>와 
//<new(함수가 사용될 때 앞에 붙이는) + 일반적인 선언 = 생성자함수 사용객체>의 상황일 때,
//만약 변수선언을 통해 생성자함수에 사용될 객체가 1억개일 경우 해당 순환이 반복되게 되면 메모리와 성능 낭비가 존재하게 된다.
//그러므로 생성자 함수 내에 있는 sum같은 함수를 따로 빼내어서 설정하게 되는데,
//이 과정에서 prototype이 사용되게 되고, 이의 형태는 Person.prototype.sum = funciton() {}와 같은 형태를 띈다.




//<4>. class의 도입과 작동방식 및 기존 constructor+prototype과의 비교

//객체지향 언어들이 채택하는 클래스
//원래 자바스크립트는 없었는데, 이를 다른 기존 유저들이 거부감이 없게끔 하는 방식을 채택
//그래서 클래스가 들어오게 되었다!
//ECMAScript6 버전에서 채택된 클래스!

//클래스는?? 객체를 만드는 공장이다.
//컨스트럭터는? 객체가 만들어질 때, 깔끔한 객체가 아니라 기본적인 기능도 셋팅하는 기능도 한다.
//요게 둘 사이의 차이점!!

class Person{
  constructor(name, first, second){ //반드시 이 이름을 써야 한다!!!
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum(){
    return 'prototype : '+(this.first + this.second);
  } 
  // Person.prototype이 필요없고, 단순히 sum만 넣어서 function단어도 없앤 체로 작동함
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



//<5>. Inhereitence 상속에 관한 것!

class Person{
  constructor(name, first, second){ 
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum(){
    return 'prototype : '+(this.first + this.second);
  }
  // avg(){
  //   return (this.first + this.second) /2;
  // }
  //이 클래스가 내가 만든게 아니라 가져다 쓰는 라이브러리 혹은 남의 꺼라면,
  //수정하게 되면 이 클래스가 업데이트 될 때 우리가 작업한 것이 수정되거나 코드가 막히거나 하는 경우 존재
  //그래서 이렇게 avg를 만드는게 부담스러운 일!
  //이 경우 상속 할 수 있음!
}
  //상속을 사용하지 않고도 이 목적을 당연히 달성가능.
  //1. 위처럼 쓰는것
  //2. 클래스를 하나 더 만드는 것(아래)

class PersonPlus{
  constructor(name, first, second){ 
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum(){
    return 'prototype : '+(this.first + this.second);
  }
  avg(){
    return (this.first + this.second) /2;
  }
}

// 그렇지만 이렇게 한다면 중복이 되니까.. 중복을 제거 하고싶은 마음이 생긴다!!
// 이걸 해결해 주는 것이 상속!!!

class PersonPlus extends Person{ // 요게 핵심!!!
  avg(){
    return (this.first + this.second) /2;
  }
}

// 이를 통해 값을 위와 똑같이 할 수 있다!!
// 그리고 맨 위의 Person의 함수를 수정하면 이를 상속하는 모든 함수가 동시다발적으로 수정된다..!!

let kim = new PersonPlus('kim', 10, 20);

console.log(kim.sum())
console.log(kim.avg())



//<6>. super란 무엇인가?

//super를 왜쓰지? : 부모 클래스와 내가 갖고있는 공통적인 부분을 제거하는 것!

class Person{
  constructor(name, first, second){ 
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum(){
    return this.first + this.second;
  }
}

class PersonPlus extends Person{
  constructor(name, first, second, third){ 
    super(name, first, second);
    //수퍼의 용법은 2개가 있다. 호출과 추가!
    //1. super 뒤에 ()가 붙으면 부모클래스의 생성자. 
    // >> 즉, PersonPlus의 부모클래스인 Person의 생성자인 constructor가 호출된다!
    //2. 또한 부모클래스의 내용을 가져와서 추가적인 작업을 할 수 있다. 22번줄과 같이!
    this.third = third;
  }
  sum(){
    return super.sum()+this.third; // 이렇게 하면 부모클래스에 갖고 있는 값을 가져오는 것!
  }
  avg(){
    return (this.first + this.second + this.third) /3;
  }
}

let kim = new PersonPlus('kim', 10, 20, 30);

console.log(kim.sum())
console.log(kim.avg())



//<7>. __proto__는 무엇인가??

//언더바 프로토는 한마디로 말하면 상속해주는 장치와 같다.

//현재 계속해서 상속에 관한 내용들이 연달아 나오고 있다.
//(1) 메모리와 성능 낭비를 줄이기 위해 도입된 new + this + prototype + constructor의 조합!
//(2) 가져오는 내용의 중복성을 없애기 위해, 그리고 타언어 유저를 위해 도입된 class의 상속개념과 직접적인 constructor 작성!
//(3) 1번과 2번에서 생성자함수 혹은 부모클래스의 내용을 직접적 수정시, 추후 문제가 될 여지가 있으므로..
//    아예 상속을 통해 내용을 복붙하고, 중복성을 없애고, 특정 부분만 추가할 수 있도록 class에 super를 도입!
//(4) 상속해주는 다른 방식으로는 __proto__의 방식도 있다. 그렇지만 권장되지는 않음.
//(5) 상속해주는 또 다른 방식으로는 Object.create()도 존재함!! 이게 권장되는 방식임

//여기서는 일단 __proto__ 방식을 설명하겠음.
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



//<8>. 객체 상속의 사용 관련

//상속의 사용방식은 아래와 같다.

let kim = {
  name: 'kim',
  first:10, second:20,
  sum:function(){return this.first + this.second}
}
console.log(kim.sum()) // 30

let lee = {
  name: 'lee',
  first:10, second:10,
  avg: function() {
    return(this.first + this.second)/2;
  }
}
lee.__proto__ = kim
console.log(lee.sum()) // 20
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



//<9>. prototype과 __proto__의 차이란?

// function Person(){};
// new Person = new Function();
// //이 두개는 같은 것!!


function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

// Person이라는 객체와 Person's prototype이라는 객체가 있다
// 이 두 가지는 연관되어 있다.
// Person.prototype === Person's prototype 객체
// Person's prototype의 constructor === Person

Person.prototype.sum = function(){}
//이걸 만드는 이유는 퍼슨이라는 원 객체에 sum이 없어서 만듦!

let kim = new Person('kim', 10, 20)
//이후 이걸 만들게 되면 Kim이라는 객체가 생성 된다!
// 그 객체에는..
//__proto__, name, first, second를 포함한다

//kim이라는 객체를 생성한 Person.prototype === kim.__proto__이 되고,
//이는 곧 Person's prototype을 가리키게 된다

//그럼 Person.prototype을 통해서도 Person's prototype에 접근이 가능하고,
//kim.__proto__를 통해서도 Person's prototype에 접근이 가능하다.

let lee = new Person('lee', 10, 10)
//이게 만들어져도 똑같이 __proto__와 나머지 내용도 포함

console.log(kim.name)
//여기서 이걸 한다면..
// 먼저 kim 안에 있는지 찾는다. 있으면 출력한다.
// 혹시 없다면? __proto__가 가리키는 객체에 name이 있는지를 찾는다.

console.log(kim.sum())
//이걸 한다면?
// kim 안에 없으니까 __proto__가 가리키는 Person's prototype에서 찾는다.
// 있으니까 실행된다.
//만약 없다면?? 그럼 Person's prototype이 __proto__로 가리키는 또 누군가를 찾는다.

//어떤 값을 우리가 사용하려고 할때, 
//어떤 데이터를 근거로 해서, 어디에서,
//그 객체가 갖고있지 않은 sum과 같은 애들을 사용하는가를 설명할 수 있어야 한다.

//그래서 요약하자면..
//prototype은 object관련
//__proto__는 link관련
//이렇게 생각하면 편하다!!