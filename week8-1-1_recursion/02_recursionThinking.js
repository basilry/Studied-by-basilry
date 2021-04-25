// <7> Recursive Thinking : 순환적으로 사고하기 + 예제들

// C언어와 같은 아이들은 절차적 언어. 객체지향 언어와 다름.
// 프로그램을 보는 관점이 재귀에 담겨져 있음.
// 잘 이해가 안되더라도 하다보면 이해가 될 것이다.

// recursion은 수학함수 계산에만 유용한가?
// 아니다! 다른 많은 문제들을 해결할 수 있다.

// 예시로 문자열의 길이 계산을 해보자.
// 단순히 length를 통해 내장메소드로 답을 도출할 수도 있으나,
// 재귀적 사고로 해보자면 1 + (전체 길이 -1)라고도 할 수 있다.
const strLength = function(str) {
  if(str === '') {
    return 0;
  } else {
    return 1 + strLength(str.substring(1))
  }
}

// console.log(strLength('abcde'))


//그럼 문자열을 출력하는 것은?
const printChars = function(str) {
  if(str.length === 0) {
    return;
  } else {
    console.log(str.charAt(0));
    printChars(str.substring(1));
  }
}

// console.log(printChars('abcde'))


//이번엔 문자열을 뒤집어서 프린트 해보자
const printCharsReverse = function(str) {
  if(str.length === 0) {
    return;
  } else {
    printCharsReverse(str.substring(1));  // 위의 함수와 위치만 달라진 것. 앞의 글자를 뒤로 빼고 재귀돌리면 역전!
    console.log(str.charAt(0));
  }
}

// console.log(printCharsReverse('abcde'))


//2진수로 변환하여 출력하기 - 잘 이해는 안되는데 이런 방식도 있다.
const printBinary = function(n) {
  if(n < 2) {
    console.log(n);
  } else {
    printBinary(n / 2);
    console.log(n % 2);
  }
}

// console.log(printBinary(7))


//0에서 n번째 인덱스까지의 배열의 합 구하는 재귀
const sum = function(n, arr) {
  if(n < 0) {
    return 0;
  } else {
    return sum(n-1, arr) + arr[n];
  }
}

console.log(sum(4, [1,2,3,4,5])) // 10





// <8> Recursion vs. Iteration

// 모든 순환함수는 반복문(Iteration)으로 변경 가능
// 그 역도 성립함. 즉 모든 반복문은 recursion으로 표현 가능함.
// 순환 함수는 복잡한 알고리즘을 단순하고 알기쉽게 표현하는 것을 가능하게 함.
// 하지만 함수 호출에 따른 오버 헤드가 있음. - 매개변수 전달, 액티베이션 프레임 생성 등.
