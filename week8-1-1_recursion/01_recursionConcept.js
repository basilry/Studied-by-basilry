// <1> 일반적인 개념

//자기 자신을 호출하는 함수인 것.
const code01 = function () {
  return recursion01();
}

const recursion01 = function () {
  console.log('hello');
  recursion01();
}

// console.log(code01());

//즉, 단순하게 어떠한 함수의 리턴 값으로 자기자신으로 호출하는 함수가 있다고 할 때 무한 루프에 빠지게 된다.





// <2> 무한루프에서 빠져나오기

//그럼 항상 무한루프에 빠지나?
//아니다. 이를 방지하기 위해서는 조건문으로 빠져나올 부분을 만들어야 한다.

const code02 = function() {
  let num = 4;
  recursion02(num);
}

const recursion02 = function(num) {
  if(num <= 0) { // base case : 적어도 하나의 recursion에 빠지지 않는 경우가 존재해야 한다.
    return;
  } else { // recursive case : recursion을 반복하다보면 결국 base case로 수렴해야 한다.
    console.log('hello');
    recursion02(num-1);
  }
}

// console.log(code02());

//num이 줄어들게끔 만들어서 빠져나오는 것이다. return으로 나올 수 있음.
//단지, recursion02 코드에서 num-1을 +1로 바꾸는 순간 무한루프에 빠지는 것을 알 수 있으니 무한히 올라갈 것.





// <3> 연속된 재귀를 통한 합산 방식

const code03 = function() {
  return recursion03(4)
}

const recursion03 = function(n) { // 이 함수의 목표는 0~n까지의 합을 구하는 것
  if(n === 0) { // base case : n이 0이라면 재귀를 끝내고 빠져나온다
    return 0;
  } else { 
    // recursive case : n이 0보다 크다면 0에서 n까지의 합은 0에서 n-1까지의 합에 n을 더한 것이다.(head/tail 나눈 방식)
    return n + recursion03(n-1);
  }
}

// console.log(code03());

//순환함수와 수학적귀납법
//*정리 : recursion03(n)은 음이 아닌 정수 n에 대해서 0에서 n까지의 합을 올바로 계산한다.
//증명 :
//  1. n=0인 경우: n=0인 경우 0을 반환한다. 올바르다. - base case.
//  2. 임의의 양의 정수 k에 대해서 n < k인 경우, 0에서 n까지의 합을 올바르게 계산하여 반환한다고 가정하자.
//  3. n = k인 경우를 고려해보자. recursion03은 먼저 recursion03(k-1)을 호출하는데,
//     2번의 가정에 의해서 0에서 k-1까지의 합이 올바로 계산되어 반환된다.
//     메서드 recursion03은 그 값에 n을 더해서 반환한다.
//     따라서 메서드 recursion03은 0에서 k까지의 합을 올바로 계산하여 반환한다.





// <4> 연속된 재귀를 통한 곱셈 방식

// Factorial : n!
// 0! = 1
// n! = n x (n-1)!, n>0
const factorial = function(n) { // 팩토리알 방식을 예로써 많이 들기도 함.
  if(n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

// console.log(factorial(4))

//순환함수와 수학적귀납법
//*정리 : factorial(n)은 음이 아닌 정수 n에 대해서 n!을 올바로 계산한다.
//증명 :
//  1. n=0인 경우: n=0인 경우 1을 반환한다. 올바르다. - base case.
//  2. 임의의 양의 정수 k에 대해서 n < k인 경우, n!을 올바르게 계산하여 반환한다고 가정하자.
//  3. n = k인 경우를 고려해보자. factorial은 먼저 factorial(k-1)을 호출하는데,
//     2번의 가정에 의해서 (k-1)!이 올바로 계산되어 반환된다.
//     따라서 메서드 factorial은 k * (k-1)! = k!을 올바로 계산하여 반환한다.


//이와 비슷한 방식으로 x의 n승 문제도 있다.
const doublePow = function(x, n) {
  if(n === 0) {
    return 1;
  } else {
    return x * doublePow(x, n-1);
  }
}

// console.log(doublePow(2, 6));





// <5> 피보나치 수열

//f0 = 0
//f1 = 1
//fn = fn-1 + fn-2 , n > 1
const fibonacci = function(n) {
  if(n > 2) {
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

// console.log(fibonacci(4))





// <6> 최대공약수 : GCD - 유클리드 방식

// m >= n인 두 양의 정수 m과 n에 대해서 m이 n의 배수이면 gcd(m, n) = n이고,
// 그렇지 않으면 gcd(m, n) = gcd(n, m % n)이다.

const gcd01 = function(m, n) {
  if(m < n) {
    let bigN = n;
    let littleM = m;
    m = bigN;
    n = littleM;
  }
  if(m % n === 0) {
    return n;
  } else {
    return gcd01(n, m % n);
  }
}

// console.log(gcd01(16, 32))

// 좀 더 단순한 버전이 있음.. 이해는 잘 안되는데 값은 같음.

const gcd02 = function(m, n) {
  if(n === 0) {
    return m;
  } else {
    return gcd01(n, m % n)
  }
}

console.log(gcd02(16, 32))