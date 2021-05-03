const githubID = 'basilry' // 여러분의 아이디로 바꿔주세요

//1. html 쿼리셀렉터 영역
const sendBtn = document.querySelector('#submit'); //챗보내기 버튼
const resetBtn = document.querySelector('#reset'); //초기화 버튼
const username = document.querySelector('#inputUser'); //인풋유저창
const text = document.querySelector('#inputChat'); //인풋챗창
const chatLine = document.querySelector('#chats'); // 채팅 타임라인
//셀렉트 옵션 아이디 해당되는 글들 필터링(?) >> 제일 마지막



const app = {
  server: `http://3.36.72.17:3000/${githubID}/messages`,
  init: () => {
    app.fetch();
  },
  fetch: () => {
    window.fetch(app.server, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      json.forEach(app.renderMessage)
    });
  },
  send : (message) => { // message인자를 받아와야 밑에 바디에 붙일 수 있음
    window.fetch(app.server, {
      method: 'POST',
      body: JSON.stringify(message), // stringify 과정이 반드시 필요합니다. 왜일까요?
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(json => console.log(json))
  },
  clearMessages : () => {
    document.querySelector('#chats').innerHTML = '';
  },
  renderMessage : ({username, text, roomname}) => {
    let div = document.createElement('div');
    div.classList.add('chat');

    let div2 = document.createElement('div');
    div2.textContent = username;
    div2.classList.add('username');

    let div3 = document.createElement('div');
    div3.textContent = text;
    
    let div4 = document.createElement('div');
    div4.textContent = roomname;
    div4.classList.add('roomname');

    div.append(div2,div3,div4);
    document.querySelector('#chats').prepend(div);
  }
};

app.init();


//3. filtering
//  >> roomname을 이름으로 나오게끔
//  >> 상단에 셀렉트 옵션 만들기 ** 했음!


//제거 함수 만들기
const refresh = function () {
  chatLine.remove();
  let chats = document.createElement('div')
  chats.id = 'chats'
  body.appendChild(chats)

}

//이름생성 랜덤함수
const randomName = function() {
  let a = Math.floor(Math.random()*3);
  if(a===0) {
    return 'Mr.tlqkf'
  } else if(a===1) {
    return 'Ms.roalcls'
  } else if(a===2) {
    return 'Miss.Qjzb'
  }
}


//2. 센딩 버튼 함수 만들기
sendBtn.onclick = function() {
  if(username.value && text.value) {
    const message = {
      username: username.value,
      text: text.value,
      roomname: randomName()
    }
    app.send(message);
    alert(`${username.value}님의 챗을 전송합니다`);
    fetch(message)
  } else {
  alert('안돼. 안 올려줘. 돌아가.')
  }
}

//3. 초기화 함수 만들기
resetBtn.onclick = function() {
  alert('뾰로롱~')

}

//4. 옵션 이름들 룸네임으로 추가할것?


//hasOwnproperty 라는 메소드 = 순회 안하고 O(1)복잡도


// 테스트를 위한 코드입니다. 아래 내용은 지우지 마세요
if(window.isNodeENV){
  module.exports = app;
}

