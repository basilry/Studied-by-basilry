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
  // console.log(request)
  // console.log(request.url) // /2.html
  var _url = new URL(request.url, "https://localhost:3000");
  var queryData = _url.href.query;
  console.log(queryData)
  // console.log(_url)
  let title = queryData.title
    console.log(queryData)
    if(_url === '/'){
      title = "Welcome"
    }
    if(_url === '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${title}`, 'utf8', function(err, description) {
      var templeate = `
    <!DOCTYPE html>
<html>
<head>
  <title>WEB1 - Welcome</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="index.html">WEB - ${title}</a></h1>
  <ol>
    <li><a href="1.html">HTML</a></li>
    <li><a href="2.html">CSS</a></li>
    <li><a href="3.html">JavaScript</a></li>
  </ol>
  <h2>${title}</h2>
  <p>${description}</p>
</body>
</html>
    `
    response.end(templeate)
    })
    

 
});
app.listen(3000);