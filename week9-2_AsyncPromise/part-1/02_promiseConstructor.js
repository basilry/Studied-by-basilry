// const sleep = (wait) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, wait);
//   });
// }

// const sleep = (wait) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('hello')
//     }, wait);
//   });
// }

// const sleep = (wait) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error('에러'))
//     }, wait);
//   });
// }

const sleep = (wait) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello')
    }, wait);
  });
}

//*세 가지 패턴의 비동기 코드를 사용하는 방법이 어떻게 다른가?
//(1) 콜백 : 콜백함수를 콜백함수로 리턴하여 연결 - 콜백 헬 생성 가능
//(2) 프로미스 : 프로미스를 통해 콜백함수를 리턴연결 - 프로미스 헬 생성 가능
//(3) 에이싱크 : 프로미스를 기반으로 에이싱크로 펑션을 감싸고, 
//    await으로 프로미스의 메소드인 .then, .catch를 대체함


// 1. resolve와 reject의 의미와 인자를 넘기는 방법
// resolve는?
// mdn : 주어진 값으로 이행하는 promise.then객체를 반환한다.
// *new promise() 메서드를 호출하여 대기상태가 된 이후,
// 콜백 함수의 인자 resolve를 실행하면 이행상태(완료)가 되며,
// 이를 .then()으로 인자를 넘겨서 처리결과 값을 받을 수 있다.

// reject는?
// mdn : 거부된 promise를 반환한다.
// *new promise() 메서드를 호출하여 대기상태가 된 이후,
// 콜백 함수의 인자 reject를 실행하면 실패상태가 되며,
// 이를 .catch()로 인자를 넘겨서 실패한이유(실패처리의 결과 값)을 받을 수 있다.


// 2. new promise() 를 통해 생성한 Promise 인스턴스에는 어떤 메소드가 존재하나요?
// .then, .catch, .finally

// 3. promise.prototype.then 메소드는 무엇을 리턴하나요?
// 처리결과 값(반환값) - 프로미스

// 4. promise.prototype.catch 메소드는 무엇을 리턴하나요?
// 실패처리의 결과 값(반환값) - 프로미스

//5. promise의 세가지 상태는 각각 무엇이며, 어떤 의미를 가지나요?
//(1) 대기상태(pending) = new promise() 메서드 호출
//(2) 이행상태(fulfilled) = resolve 실행 - .then 메서드 호출
//(3) 실패상태(rejected) = reject 실행 - .catch 메서드 호출

// 6. await 키워드 다음에 등장하는 함수 실행은, 어떤 타입을 리턴할 경우에만 의미가 있나?
// 어웨잇은 에이싱크로 감싸져 있는 함수 안에서 실행되어야 하며,
// 그 실행은 함수 앞에 붙어서 메소드의 실행을 일시 중지시키는 역할을 한다.
// 바로 프로미스의 값이 사용가능 할 때까지!
// 이러한 바탕에서,
// async가 어떠한 함수 앞에 붙으면 해당 함수는 프로미스가 되고,
// 그 안에서 만들어진 메소드 앞에 await이 붙게 되면,
// 그 메소드는 프로미스가 resolve 돼서 결과값이 넘어올때까지 기다린다
// 그러므로, 의미의 유무는 프로미스의 resolve나 reject같이,
// 처리결과값이나 실패처리 결과값이 리턴되어야 의미가 있다.
// 결과적으로, 프로미스여야 의미가 있다.

//7. await 키워드를 사용할 경우, 어떤 값이 리턴되나요?
// 프로미스의 resolve나 reject와 같이 처리결과 값 혹은 실패처리결과 값을 리턴하되,
// 만일 await과 setTimeout을 통해 (n000)을 붙임으로 , n000만큼의 밀리세컨즈의 딜레이를 시킨다면,
// 해당 시간만큼 딜레이 되어 값을 도출한다.
// 단, 에이싱크 안에서는 시간과 관계없이 수직실행(위에서부터 아래로)으로 값을 도출한다.