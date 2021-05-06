const http = require('http');

const PORT = 5000;

const ip = 'localhost';

const server = http.createServer((request, response) => {
  // const {headers, method, url} = request;
  if(request.method === 'POST'){ // value
    if(request.url === '/lower') {
      let data = '';
      request.on('data', chunk => {
        data += chunk;
        // console.log('data')
        // console.log(typeof chunk);
      })
      request.on('end', () => {
        data = data.toLowerCase();
        response.writeHead(200, defaultCorsHeader);
        response.end(JSON.stringify(data))
      });
      // let body = [];
      // request.on('data', (chunk) => {
      // body.push(chunk);
      // }).on('end', () => {
      //   body = Buffer.concat(body).toString().toLowerCase()
      //   response.writeHead(200, defaultCorsHeader);
      //   response.end(JSON.stringify(body));
      // })
    } else if(request.url === '/upper') {
      // let data = '';
      // request.on('data', chunk => {
      //   data += chunk;
      // })
      // request.on('end', () => {
      //   data = data.toUpperCase();
      //   response.writeHead(200, defaultCorsHeader);
      //   response.end(JSON.stringify(data));
      // });
      let body = [];
      request.on('data', (chunk) => {
      body.push(chunk); // 만약 데이터가 dd 일시~
      // console.log(body) // [<Buffer 22 64 64 22>]
      // console.log(chunk) // <Buffer 22 64 64 22>
      // console.log(JSON.parse(chunk)) // 'dd'
      // console.log(JSON.stringify(body)) // [{"type":"Buffer","data":[34,100,100,34]}]
      }).on('end', () => {
        body = Buffer.concat(body).toString().toUpperCase();
        response.writeHead(200, defaultCorsHeader);
        response.end(JSON.stringify(body));
        // console.log(JSON.stringify(body)) // "\"DD\""
      })
    } else {
    response.writeHead(404, defaultCorsHeader);
    response.end();
    }
  }

  if(request.method === 'OPTIONS') {
    response.writeHead(200, defaultCorsHeader);
    response.end();
  }


  console.log(
    `http request method is ${request.method}, url is ${request.url}`
  );
  // // response.writeHead(200, defaultCorsHeader);
  // response.end('hello mini-server sprints');
});



server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*', // 모든 주소 다 받는거고
  // 'http://192.168.0.102:5000',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // 받는 메서드 타입
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};