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
let lee = new Person('lee', 10, 10, 10);
console.log(kim.sum());
console.log(lee.sum());

let d1 = new Date('2021-4-10'); 
console.log(d1.getFullYear());
console.log(d1.getMonth());// month는 0부터 카운팅 하니까 도출 값이 3으로 나옴

console.log(Date);


console.log(new Person());

//함수를 그냥 호출하면 그냥 함수라고 나온다.
//하지만 앞에 new를 붙이면 이 함수는 더이상 일반적인 함수가 아니라,
//객체를 생성하는 생성자가 된다. 영어로 constructor
//맥락적으로 생성자 함수!

//결과적으로, 컨스트럭터(생성자) 함수를 만든다! 라는 것은?

//(0)일반적인 함수를 new를 앞에 붙여 객체적인 의미가 있는 함수로 만든 뒤에~~
//(1)해당 함수의 파라미터를 임의로 설정하고(ex: name, first, seconde, third..같은),
//(2)해당 함수 내 객체의 키값(파라미터) 앞에 this.를 붙이고,
//(3)객체의 키값과 대응하는 밸류값에 파라미터를 직접적으로 '=' 설정하면 양산형 공장을 만들어 낼 수 있다.
//(4)그 후 이러한 파라미터에 대응하는 값들을 넣는 개별변수를 설정하면,
//(5)위 생성자 함수를 통해 개별변수들에 상응하는 값이 도출된다.

//물론!!! new를 갖고 데이트를 선언하는 순간,
//프로그램 내부적으로 해당 날짜를 가진 객체가 생선된다!
// 어떤 설계도를 가지고 있는지 모름

//this는?? : 그 디스가 속해있는 메소드가 속해있는 
// 객체를 가르키도록 약속된 특수한 예약어, 특수한 약속
// >> 이는 결과적으로 나 자신(객체)을 호출하는 것!!