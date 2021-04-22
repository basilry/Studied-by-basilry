const btnSignup = document.querySelector('#btn-signup')  // 버튼 누르면 나오는것
const inputFmYou = document.querySelector("#input-form-yourname")  // 아이디 인풋박스 포함 박스
const inputFmPwd = document.querySelector("#input-form-password")  // 비번 인풋박스 포함 박스
const inputFmPwdConf = document.querySelector("#input-form-password-confrim")  // 비번 확인 인풋박스 포함 박스
const errorMessage = document.querySelector("#invalid-message")  // 에러메시지
const YourNames = [];

// [이벤트 핸들러]
function handleBtnSignupClick() {
  console.log('Thank you for click Sign up button!')
  console.log('It is done of your Sign up!')
  console.log(`Your ID is ${inputFmYou.value}.`);
  console.log(`Your Password is ${inputFmPwd.value}.`);
  /*

  버튼을 클릭했을 때, 작동해야하는 시나리오의 예시를 소개합니다.
  예를 들어, 아이디가 8자 이상인지 확인하려면,

  1. 아이디 input box를 변수로 지정한다
  2. input box에 적힌 값을 얻어온다
  3. input 값을 함수를 이용해 검증한다
  4. 함수 리턴값 (true 또는 false)을 통해 유효성을 검증하여 로직을 분기한다
  5. 유효하다면, 정상적으로 로그인했다고 alert 창을 띄운다
  6. 유효하지 않다면
    6-1. 아이디 입력창 옆에 오류 메시지를 표시한다
    6-2. 아이디 입력창에 붉은색의 스타일을 적용한다

  */
}

// [유효성 검증 함수]
// 필요에 따라서 여러분들이 사용할 유효성 검증 함수를 추가하세요.
function moreThanLength(str) {
  return str.length >= 6; // 항상 true 또는 false로 리턴하게 만드는 게 좋습니다.
}

function onlyNumberAndEnglish(str) {  //숫자랑 영어만 된다
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

function strongPassword(str) {  // 8자리 숫자 이상만 패스워드 통과다
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

function okIdentity() {
  if(moreThanLength(inputFmYou.value)) {
    errorMessage.innerHTML = '<i class="fas fa-user-check" aria-hidden="true"></i>Ok';
    errorMessage.style.color = 'green';
  } else {
    errorMessage.textContent = `plz try again! ID should be more than 6 characters!`;
    errorMessage.style.color = 'red';
  }
}

function okPassword() {
  const passwordlength = inputFmPwd.parentElement.children[2];
  if(strongPassword(inputFmPwd.value)) {
    passwordlength.innerHTML = '<i class="fas fa-user-check" aria-hidden="true"></i>Ok';
    passwordlength.style.color = 'green';
  } else {
    passwordlength.innerHTML = '<i class="fas fa-ban"></i>plz try again! PW should be more than 8 numbers!';
    passwordlength.style.color = 'red';
    passwordlength.parentElement.style.backgroundColor = 'gray';
  }
}

function finalOkPassword() {
  const confirmpasswordlength = inputFmPwdConf.parentElement.children[2];
  if(inputFmPwdConf.value === inputFmPwd.value) {
    confirmpasswordlength.innerHTML = '<i class="fas fa-user-check" aria-hidden="true"></i>OK';
    confirmpasswordlength.parentElement.style.backgroundColor = 'green';
  } else {
    confirmpasswordlength.innerHTML = '<i class="fas fa-ban"></i>plz try again! These numbers are not same of upper numbers!'
    confirmpasswordlength.parentElement.style.backgroundColor = 'red';
  }
}


// [시각적 피드백]: 에러메시지를 띄웁니다
function displayErrorMessage(message) {
  elErrorMessage.classList.add('show');
  elErrorMessage.textContent = message;
}

// [엘리먼트와 이벤트 핸들러의 연결]
btnSignup.onclick = handleBtnSignupClick;
inputFmYou.onchange = okIdentity;
inputFmPwd.onchange = okPassword;
// inputFmPwdConf.onchange = finalOkPassword; 