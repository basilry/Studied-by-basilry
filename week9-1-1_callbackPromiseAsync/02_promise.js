// <1> 프로미스란?

// 프로미스란 자바스크립트 안에 내장되어 있는 객체이다.
// 비 동기적으로 콜백함수 대신 쓸 수 있는 유용한 것이다.

// 1. 상태비교 - 기능 수행이 완료가 되어서 성공했는지, 실패했는지를 알 수 있는 것이다.
//    >> 대기상태(pending) -> 기능 수행 후 -> 성공(fulfilled) or 실패(rejected)
// 2. 제공자와 소비자의 차이점
//    >> producer vs. consumer




// <2> producer

// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => { // 이 것을 만드는 순간 바로 실행이 된다.
    // 무언가 헤비한 일들을 위주로 처리한다. ex) network, read files..
    console.log('doing something...') // 이걸 만들어놓으면 파일을 실행하는 순간 콘솔에 찍힘.
    setTimeout(() => {
      resolve('ellie')
      // reject(new Error('no network')) // 에러 역시 js에서 제공하는 오브젝트
    }, 2000) // 밀리세컨즈 단위
});

// 사용자가 버튼을 눌렀을 때 네트워크 통신을 요청하는 경우라면,
// 프로미스를 하게 되면 바로 실행이 되기 때문에 불필요한 실행이 일어날 수 있다.



// <3> consumer : then, catch, finally
// 값이 정상적으로 잘 수행이 된다면~ >> .then >> 그럼 내가 어떤 값(value)을 받아올거야
// 그 값(value)는 위의 프로미스에서 resolve로 만들어 놓은 'ellie'라는 값이야!
promise // 
.then(value => { 
  console.log(value);
})
.catch(error => { // 캐치로는 에러를 받아 올 수 있음
  console.log(error);
});
// .finally(() => { // 파이널리도 있긴 한데, 내 컴에서는 작동을 안하는 듯.
//   console.log('finally')
// })



// <4> Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  });
})
.then(num => console.log(num));



// <5> Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000)
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000)
    setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000)
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000)
  });


getHen()
  // .then(hen => getEgg(hen)) // 이렇게 받아오는 내용이 함수의 인자로 되어 있는 경우에는..
  .then(getEgg) // 이렇게 생략이 가능함
  // .then(egg => cook(egg))
  .catch(error => {
    return '🍞';
  })
  .then(cook)
  // .then(meal => console.log(meal));
  .then(console.log) // 72번째 줄과 같이 움직임 // 이게 없으면 위의 오류 빵 리턴이 실행 안된다
  .catch(console.log)




// <6> 콜백 헬을 프로미스로 바꿔보기
// 자바스크립트 12. 프로미스 개념부터 활용까지 // 23:36부터..
// https://youtu.be/JB_yU6Oe2eE