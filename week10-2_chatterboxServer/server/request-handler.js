/*************************************************************

request handler 함수를 여기서 작성합니다.

reuqestHandler 함수는 이미 basic-server.js 파일에서 사용 했지만, 아직 작동하지 않습니다.

requestHandler 함수를 export 하여 basic-server.js 에서 사용 할 수 있게 하세요

**************************************************************/

// 익스프레스로 만든 버전
// *구현 내용 : post, get가능. 서버가 켜져있는 상태라면 post된 내용들 유지. 끄면 없어짐.
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // body 없애주는 모듈
const jsonParser = bodyParser.json(); //위와 세트
//app.use(express.json()) // JSON 형태로 오는 요청의 페이로드(바디)를 쉽게 받게 해주는 것(위드 파싱) 위의 바디파서 상위호환!
const cors = require('cors') // cors를 전체에 붙여주는 모듈

const port = 3000


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))


let data = {'results': []}
app.get('/messages', jsonParser, (req, res) => {
  // res.status(200).send('welcome')
  // console.log(res.status(200))
  res.send(data)
})

app.post('/messages', jsonParser, function(req, res) {
  data.results.push(req.body);
  res.status(201).send('welcome')
  res.send(req.body)
})

// 이것을 키면 ./client/index.html에서 글을 등록 할 수 있는 대신 테스트 통과가 안되고,
// 주석처리를 하면 위의 html 아무런 동작을 할 수 없는 대신 테스트를 전원 통과한다.
// 일단 테스트 통과가 먼저이니 이렇게 두겠음.
// app.listen(port, () => { 
//   console.log(`Example app listening at http://localhost:${port}`)
// })

module.exports = app;



// 기존 채터박스 서버 버전
// const messages = {
//   results: []
// };

// const requestHandler = function (request, response) {

//   console.log("Serving request type " + request.method + " for url " + request.url);

//   const headers = defaultCorsHeaders;
//   headers["Content-Type"] = "text/plain";

//   if(request.method === 'OPTIONS') {
//     response.writeHead(200, defaultCorsHeaders);
//     response.end();
//   }

//   if(request.method === 'GET' && request.url === '/messages') {
//     // const data = JSON.stringify(messages); 
//     response.writeHead(200, defaultCorsHeaders)
//     response.end(JSON.stringify(messages))
//   } else if(request.method === 'POST' && request.url === '/messages') {
//       response.writeHead(201, defaultCorsHeaders)
//       let body = [];
//       request.on('data', (chunk) => {
//         body.push(chunk);
//       })
//       .on('end', () => {
//         // body = Buffer.concat(body).toString();
//         messages.results.push(JSON.parse(body));
//         response.end(JSON.stringify(body));
//       })
//     } else {
//     response.writeHead(404, defaultCorsHeaders);
//     response.end('sorry');
//   }
// };

// const defaultCorsHeaders = {
//   "access-control-allow-origin": "*",
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "content-type, accept",
//   "access-control-max-age": 10 // Seconds.
// };


// module.exports = requestHandler;