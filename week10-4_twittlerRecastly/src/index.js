import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const title = <App />
// console.log(App);

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);


//1. npm start = 서버연결 => 주소 : localhost:8080
//2. npm run storybook = 스토리북이라는 사이트랑 연결됨
//3. npm test = 테스트케이스 확인
//4. 연결구도
//
// index.js -> App.js ---- VideoList.js -- VideoListEntry.js
//                     ㅣ
//                      -- VideoPlayer.js
//                     ㅣ
//                      -- Nav.js -- Search.js
//
// fakeData.js는 App, VideoList에 별도로 연결되어 있음.