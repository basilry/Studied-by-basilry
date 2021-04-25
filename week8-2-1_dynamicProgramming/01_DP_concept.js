// <1> part 1. 인트로.

// 동적 프로그래밍 : 리처드 벨만이라는 사람이 만든 알고리즘.





// <2> 피보나치를 통한 동적 프로그래밍 확인

//가장 먼저 예시를 들 것은 피보나치이다.
//f(n) = f(n-1) + f(n-2), n>2
//f(1) = f(1);

const fibonacci01 = function(n) {
  if(n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci01(n-2) + fibonacci01(n-1);
  }
}

// console.log(fibonacci01(4));

//이 방식으로 하게되면 똑같은 계산을 중복적으로 해야 하기 때문에 효율성이 떨어진다.
//그럼 이미 계산된 것들을 어떻게 해야하나? 기억을 시키면 된다.





// <3> Recursion + Memoization - 콩글리시인듯? // top-down 방식

//중간 계산 결과를 caching함으로써 중복계산을 피한다.
const fibonacci02 = function(n) { // 권오흠 교수님 강의 버전
  let f = [0]; // 자바 형식에는 이 부분이 없길래 그냥 내가 추가함.
  if(n === 1 || n === 2) {
    return 1;
  } else if(f[n] > -1) {  // 배열 f가 -1로 초기화되어있다고 가정한다면~
    return f[n];          // 이미 계산된 값이라는 의미니까 그냥 리턴
  } else {
    f[n] = fibonacci02(n-2) + fibonacci02(n-1);  // 중간 계산결과를 caching
    return f[n];
  }
} 
// 즉, 한 마디로 f라는 배열 안에다가 인덱스에 값을 저장하는 것을 메모이제이션이라 하는 것임.
// 이렇게 쉽게 말할 수 있는 것을 왜 어렵게 설명이 되는지 모르겠네.. 하튼
// 이러한 피보나치에서는 1과 2번째 인덱스가 1이니까, f = [0, 1, 1, 2, 3, 5, 8]까지 되어있음.
// n만큼의 인덱스까지 값이 f 배열에 기록되는 것!

const fibonacci03 = function(n, memo = []) { // 코드스테이츠 레슨 버전
  if(memo[n] !== undefined) return memo[n]; // 이미 해결한 하위 문제인지 확인
  if(n <= 2) return 1; // 피보나치는 2 이하면 1이니까..

  let res = fibonacci03(n-1, memo) + fibonacci03(n-2, memo);
  // 해결한 하위문제가 아니라면 결과값을 도출하여 res에 할당
  memo[n] = res; // 추후 동일한 문제를 만났을 때 사용하기 위해 리턴 전에 memo에 저장
  // res와 memo[n]을 분리해 놓은것은 굳이 안그래도 되는 것 같은데 한 것 같다. 그냥 memo에 할당해도 될듯.
  // 위의 권오흠 교수님 버전과 별반 차이 없음. 구체적인 내용은 다를 지 몰라도, 관통하는 내용은 동일!

  return res;
}

// console.log(fibonacci03(6));





// <4> Iteration + Tabulation - 반복문 사용 DP // bottom-up 방식

// 이번에는 bottom up 방식으로 중복 계산을 피해보자.

const fibonacci04 = function(n) {
  // let f = Array(n).fill(0); // 이 방법을 사용해도 상관 없음.
  let f = [0];
  f[1] = f[2] = 1;
  // let f = [0, 1, 1] // 위 두 줄을 삭제하고 이 방법을 사용해도 괜찮음.
  for(let i = 3; i <= n; i++) { // 여기서 주의할 것. n이 아니라 i임...ㅋㅋ
    f[i] = f[i-1] + f[i-2];
  }
  return f[n];
}

// 이 과정을 다이나믹 프로그래밍, 동적 프로그래밍이라 한다.





// <5> 이항계수(Binomial Coefficient)로는 계산이 안될까?

// *여기서 잠깐 순열과 조합에 대한 공식을 비교해보고 가자
// 순열 : nPr = n! / (n-r)!
// 조합 : nCr = n! / (n-r)!r!

// 이항 계수는 nCk = (n-1)Ck + (n-1)C(k-1)의 공식을 지닌다.
// 즉, n개에서 k를 뽑을 때, A라는 특정부분을 포함을 하느냐 안하느냐를 총합한 것이 n개에서 k를 뽑는 방식이라는 것이다.
// 다시 말해, A라는 특정부분을 1이라 하고 n-1개에서 k개를 선택하는 방법 + n-1개에서 k-1개를 선택하는 방법의 합이,
// n개에서 k개를 선택하는 방법과 같다는 의미이다.

const binomial01 = function(n, k) {
  if(n === k || k === 0) {
    return 1;
  } else {
    return binomial01(n-1, k) + binomial01(n-1, k-1)
  }
}

// console.log(binomial01(5,3))

// 하지만 이 역시 많은 계산이 중복된다.
// 아래는 인접행렬을 만들어서 memoization을 하는 방법이다. - top-down

const binomial02 = function(n, k) {
  let binom = [];
  for(let i = 0; i < n+1; i++) { // 권교수님 강의는 자바 기반이라 이 부분이 필요 없는 듯!
    binom[i] = Array(n+1).fill(0);
  }

  if(n === k || k === 0) {
    return 1;
  } else if(binom[n][k] > 0) { 
    // 권교수님 강의에서는 -1이었음. 없다는 뜻. 그러나 나는 0으로 채웠으니 0이상~으로 하겠음.
    return binom[n][k];
  } else {
    binom[n][k] = binomial02(n-1, k) + binomial02(n-1, k-1);
    return binom[n][k];
  }
}

// console.log(binomial02(5, 3))


// 동적 프로그래밍으로 이항계수를 계산해본다면.. - bottom-up

const binomial03 = function(n, k) { 
  // 이 코드는 시간이 너무 오래 걸리는 것 같다. 무슨 문제가 있는 듯...
  // 일단 이런 것이 있다는 것에 의의를 두자.
  let binom = [];
  for(let i = 0; i < n+1; i++) {  //이 부분은 윗 함수와 같이 없으면 작동이 안될 것 같아 추가함.
    binom[i] = Array(n+1).fill(0);
  }

  for(let i = 0; i < n+1; i++) {
    for(let j = 0; j < k+1 && j <= i; k++) {
      if(j === 0 || i === j) {
        binom[i][j] = 1;
      } else {
        binom[i][j] = binom[i-1][j-1] + binom[i-1][j];
      }
    }
  }
  return binom[i][j];
}

// console.log(binomial03(5, 3))





// <6> Memoization vs. Dynamic Programming 정리!

// 1. 순환식의 값을 계산하는 기법들이다.
// 2. 둘 다 동적계획법의 일종으로 보기도 한다.
// 3. memoization은 top-down 방식이며, 실제로 필요한 subproblem만을 푼다.
// 4. 동적계획법은 bottom-up 방식이며, recursion에 수반되는 overhead가 없다.