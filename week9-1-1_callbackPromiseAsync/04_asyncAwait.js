//<1> 개념

// async와 await은 promise를 조금 더 간결하고 간편하고 그리고 동기적으로 실행되는 것처럼 보이게 만들어주는 것
// 프로미스 체이닝이 이어지면 코드가 난잡해질 수 있기 때문에,
// 이를 좀 더 간편하게 작성하기 위해 에이싱크와 어웨잇이 추가 된 것
// 기존의 프로미스 위에 간편한 api를 제공!(기존의 것을 감싼다) 
// 이것을 syntatctic sugar라고도 한다!

// 물론 그렇다고 해서 모든 프로미스를 다 대체하는 것은 아니다.
// 프로미스가 필요한 방법이 있고, 에이싱크/어웨잇을 써야 깔끔해지는 경우가 있다.





// <2> async
// 펑션 앞에 에이싱크를 붙이면 자동적으로 프로미스로 바꿔준다
async function fetchUser() { // 밑의 함수와 동일
  return 'ellie'
}

// function fetchUser() { // 10초 안에 네트워크의 요청을 실행하는 함수
//   return new Promise((resolve, reject) => {
//     resolve('ellie')
//   })
// }

const user = fetchUser();
user.then(console.log)
console.log(user);





// <3> await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000); // 어웨잇은 이 딜레이가 끝날때까지 사과를 리턴하는 프로미스가 만들어 진 것
  // throw 'error'; // 에러를 추가해보자(밑의 픽프룻 함수 만들고 나서)
  // 이는 실행함수에서 try(실행)/catch(에러)를 추가하면 된다
  return '🍎'
}

async function getBanana() {
  await delay(1000);
  return '🍌'
}
//바로 위의 함수를 프로미스로 바꾼다면?
// function getBanana() {
//   return delay(3000)
//   .then(() => '🍌') 
// }


//위의 과일들을 한번에 다 가져오는 함수 만들기!!
//프로미스 체이닝 방식
// function pickFruits() {
//   return getApple()
//   .then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// }

//에이싱크어웨잇 방식
// async function pickFruits() {
//   // try {
//   const apple = await getApple();
//   const banana = await getBanana();
//   // } catch() {}
    
//   return `${apple} + ${banana}`
// }

//병렬적 실행(한꺼번에 죄다 나오기)
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`
}

pickFruits().then(console.log); // 🍎 + 🍌





// <4> promise.all
// 이것은 프로미스를 병렬적으로 실행할 수 있게끔 배열형태로 모아주는 형태
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()])
}
pickOnlyOne().then(console.log)