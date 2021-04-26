// <1> 값으로서의 함수

// js에서는 함수도 객체다. 다시 말해서 일종의 값이다. 거의 모든 언어가 함수를 가지고 있다.
// js의 함수가 다른 언어의 함수와 다른 점은 함수가 값이 될 수 있다는 점이다.

function a() {};
var a = function() {};

// 이러한 예제처럼 함수 a는 변수 a에 담긴 값이다. 또한 함수는 객체의 값으로 포함될 수 있다.
// 이렇게 객체 속성의 값으로 담겨진 함수를 메소드(method)라고 부른다.

a = {
  //key = 변수 = 속성 = property
  b: function() { 
     //value = 값 = 메소드
  }
};

// 함수는 값이기 때문에 다른 함수의 인자로 전달 될 수도 있다.
function cal(func, num) { // 함수를 호출할 수 있는 메소드를 만듦
  return func(num)
}

function increase(num) {
  return num + 1
}

function decrease(num) {
  return num - 1
}

// console.log(cal(increase, 1)) // 2
// console.log(cal(decrease, 1)) // 0





// <2> 함수를 함수의 리턴값으로 사용

// 함수는 함수의 리턴 값으로도 사용할 수 있다.
function cal(mode) {
  var funcs = {
    'plus' : function(left, right) {return left + right},
    'minus' : function(left, right) {return left - right}
  }
  return funcs[mode]
}

console.log(cal('plus')(2,1)) // 3
console.log(cal('minus')(2,1)) // 1


//당연히 배열의 값으로도 사용할 수 있다.
var process = [
  function(input) {return input + 10;},
  function(input) {return input * input;},
  function(input) {return input / 2;}
];

var input = 1;
for(var i = 0; i < process.length; i++) { // i만큼 함수가 순차적으로 실행된다
  input = process[i](input);
}

console.log(input); // 1을 넣어서 돌리면... 값 : 60.5

// 즉, 변수와 매개변수, 리턴값으로 사용할 수 있는 함수,
// 다시말해 자바스크립트에서의 함수를 first-class citizen(object..)라고 부른다.






// <3> 처리의 위임

// 값으로 사용될 수 있는 특성을 이용하면 함수의 인자로 함수를 전달할 수 있다.
// 값으로 전달된 함수는 호출될 수 있기 때문에 이를 이용하면 함수의 동작을 완전히 바꿀 수 있다.
// 인자로 전달된 함수 sortNumber의 구현에 따라서 sort의 동작방법이 완전히 바뀌게 된다.

function sortNumber(a,b) {
  return a-b;
}

var numbers01 = [20,10,9,8,7,6,5,4,3,2,1,];

console.log(numbers01.sort(sortNumber))

// 어떠한 단어에 점을 붙여서 글자가 붙으면 그 앞은 객체라는 의미이고, 뒤는 메서드라는 의미이다.

let numbers02 = [20,10,9,8,7,6,5,4,3,2,1,];
let sortfunc = (a , b) => (a - b); // 역이라면 b-a // ==> 이게 콜백함수라는 것!!
// function(a,b) {
//   console.log(a,b);
//   if(a > b) {
//     return 1;
//   } else if(a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
//  // a-b가 true라면~ 이라는 것으로 정렬이 가능한 것임
// }

console.log(numbers02.sort(sortfunc)) // 값으로써 함수를 사용할 수 있게끔 한다

// 생활코딩 : 자바스크립트 입문수업 - 값으로서 함수와 콜백(4/4) : 비동기 콜백 부터 다시 볼 것!