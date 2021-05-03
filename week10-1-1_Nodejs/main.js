//<0> 인트로

// 웹페이지를 동적으로 움직이게끔 하는 자바스크립트가 태어난 이래로,
// 해당 데이터들을 각 개인들이 가공하고 업로드 및 삭제 수정이 가능하게끔 하는 것이 필요해졌다.
// 그래서 태어난 것이 node.js!

// 원래 구글 개발진이 크롬을 만들면서 v8엔진을 기반으로 자바스크립트를 구동하였는데,
// 이를 node.js 측에서 가져와 v8엔진 기반으로 새롭게 만든것이다..!


//<1> node.js실행

var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
    console.log(queryData.id)
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
      // response.end();
      // return;
    }
    response.writeHead(200);
    // console.log(__dirname + _url)
    response.end(fs.readFileSync(__dirname + _url));
    // response.end('basilry : ' + url) // 이걸 하면 그냥 흰 화면에 글자만 나옴
 
});
app.listen(3000);