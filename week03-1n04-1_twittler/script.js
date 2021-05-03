//0. 이놈이 없으면 하드코딩 트윗들이 업로드가 안됨.. 왜지??
const state = {
  isFilteredPage: false,
};


//1. html 엘리먼트를 js 변수로 선언 /완
const usernameWritten = document.querySelector("#username_written");  // 유저아이디
const messageWritten = document.querySelector("#message_written");    // 유저트윗
const uploadBtn = document.querySelector("#upbutton");         // 업로딩버튼
const refreshBtn = document.querySelector("#refresh_button");  // 새로고침 버튼
const goBackBtn = document.querySelector("#goBack_button");   // 뒤로가기 버튼

const mainTweetList = document.querySelector('#Tweet-interface');  // 새 트윗들이 들어갈 곳


//2. 트윗의 등록과정 함수 설정 /완
const makeNewTweet = function (ul, tweet, id) {
  const human = document.createElement('li');
  human.classList.add('human');

  const username = document.createElement('span');
  username.classList.add('name');
  username.textContent = tweet.user;
  username.addEventListener('click', handleClickUser);

  const userdate = document.createElement('span');
  userdate.classList.add('date');
  userdate.textContent = tweet.created_at;

  const message = document.createElement('div');
  message.classList.add('tweet');
  message.textContent = tweet.message;

  human.append(username, userdate, message);
  ul.append(human);
  return ul;
};


//3. data.js에 있는 하드코딩 트윗 불러오는 함수***
const renderDATA = function () {
  const ul = document.createElement('ul');
  ul.id = 'timeline';

  const tweets = DATA.reduce(makeNewTweet, ul);

  state.isFilteredPage = false;
  mainTweetList.append(tweets);
};


//4. 이름 필터링해주는 함수***
const renderFilteredDATA = function (targetName) {
  const ul = document.createElement('ul');
  ul.id = 'timeline';

  const tweets = DATA.filter(function (tweet) {
    return tweet.user === targetName;
  }).reduce(makeNewTweet, ul);

  state.isFilteredPage = true;
  mainTweetList.append(tweets);
};



//5. 트윗 제거하는 함수 /완
const removeTweet = function () {
  const timeline= document.querySelector('#timeline');
  timeline.remove();
};



//6. 이름 필터링 할 때 클릭 반응 함수**
const handleClickUser = function (event) {
  const targetName = event.target.textContent;
  alert(`${targetName}님의 글을 필터링 한 결과입니다.`);
  removeTweet();
  renderFilteredDATA(targetName);
};



//7. 업로딩 버튼 반응 함수***
uploadBtn.onclick = function () {
  if (state.isFilteredPage) {
    alert('Go Back 버튼을 눌러 전체 트윗 창으로 돌아가세요.');
    return;
  }
  if (usernameWritten.value && messageWritten.value) {
    const tweetObject = {};
    tweetObject.user = usernameWritten.value;
    tweetObject.message = messageWritten.value;
    tweetObject.created_at = new Date().format()
    alert(`${tweetObject.user}님의 트윗을 전송합니다.`);
    DATA.unshift(tweetObject);
    removeTweet();
    renderDATA();
    usernameWritten.value = '';
    messageWritten.value = '';
  } else {
    alert('User와 Message를 모두 입력하세요.');
  }
};


//8. 새로고침 버튼 반응 함수 /완
refreshBtn.onclick = function() {
  const tweetObject = generateNewTweet();
  DATA.unshift(tweetObject);
  removeTweet();
  renderDATA();
}


//9. 뒤로가기 버튼 반응 함수 /완
goBackBtn.onclick = function() {
  removeTweet();
  renderDATA();
}

//10. data.js의 하드코딩 트윗 불러와서 초기화면값 설정 /완
renderDATA();