// <3> Request message

//예시파일

// GET /doc/test.html HTTP/1.1        =========>>>>>> Request Line ㄱ
// HOST: www.test101.com              ==============ㄱ              l
// Accept: image/gif, image/jpeg, */*                l              l Request
// Accept-Language: en-us                            l Request      l   Message
// Accept_encoding: gzip, deflate                    l   Headers    l     Header
// User-Agent: Mozilla/4.0                           l              l
// Content-Length: 35                 ===============↵ =============↵
//=========================>> A blank line seprates header & body
//bookId=12345&author=Tan+Ah+Teck  ===>> Request Message Body



// 내가 만든 css/index.html 파일의 리퀘스트 헤더

// GET /week9-5-2-1_CSS/index.html HTTP/1.1
// Host: 192.168.0.102:5500
// Connection: keep-alive
// Cache-Control: max-age=0
// Upgrade-Insecure-Requests: 1
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
// Accept-Encoding: gzip, deflate
// Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
// If-None-Match: W/"874-17928852771"
// If-Modified-Since: Sat, 01 May 2021 15:21:25 GMT


// Get = method : 웹서버와 웹브라우저가 어떤 방식으로 통신할 것인가? 여기서 겟은 가져오는 것.
// doc/test.html = 우리가 웹서버에게 요청하는 정보가 무엇인가?
// HTTP/1.1 = 웹브라우저가 현재 사용하는 혹은 사용할 수 있는 버전

// HOST이하부터는 리퀘스트 헤더라는 부분.
// 반드시 적어야 하는 필수적인 것은 HOST.
// 이는 인터넷에 연결되어 있는 컴퓨터 한대 한대를 식별하는 정보
// 웹 서버의 주소를 적는 것과 같다.
// 하나의 웹서버가 여러개의 도메인을 서비스 할 수도 있다.
// 그래서 주소를 다르게 한다면 가상 호스트서버를 통해 서비스 가능.
// 포트 번호로 식별함.

// User-Agent : 웹 브라우저의 다른 이름. 이를 통해 내가 사용하고 있는 컴퓨터의 os와 버전확인 가능.
// 뿐만 아니라 해당 서버에 접속하는 유저들이 많이 쓰는 브라우저를 확인가능.
// 예를들어 로봇의 접근을 차단할 수도 있음.

// Accept-Encoding : 웹브라우저와 웹서버가 서로 통신할때 응답하는 데이터의 양이 많으면 압축해서 전송하고,
// 이를 웹브라우저가 압축을 풀어서 처리할 수 있다. 이렇게 하면 데이터자원을 아낄 수 있다.
// 옆에 써져있는 것은 방식들임. 선호하는 방식을 통해 할 수 있음.

// If-Modified-Since : 우리가 요청한 파일을 마지막으로 언제 다운로드 받은 파일인지를 웹서버에 알려줌.
// 그래서 웹서버가 자신이 갖고있는 파일이 최신이라면 전송을 해주고, 아니라면 전송 안하는 것. 효율성 증대.






// <4> Response message

// 구조 설명

// version, status code, phrase   ================>>> status
// header field name, value       ==========ㄱ
//         same                              l headers
// header filed name, value       ===========↵ 
// =========================================== >> blank line
// body

//*응답코드 설명
//1xx : information
//2xx : successes
//3xx : redirection
//4xx : client error
//5xx : server error



// 내가 만든 css/index.html 파일의 리스폰스 헤더

// HTTP/1.1 200 OK
// Vary: Origin
// Access-Control-Allow-Credentials: true
// Accept-Ranges: bytes
// Cache-Control: public, max-age=0
// Last-Modified: Sat, 01 May 2021 15:21:25 GMT
// Date: Sat, 01 May 2021 16:11:22 GMT
// ETag: W/"874-17928852771"
// Content-Type: text/html; charset=UTF-8
// Content-Length: 2164


// Content-type : 웹 서버가 응답할 때, 그 응답은 텍스트, 그리고 html이라는 타입이다 라고 한다면 서버에서 그렇게 표시해줌.
// text/html

// Content-Length: 응답의 사이즈(byte)

//라스트 모디파이드, 콘텐트 인코딩은 리퀘스트와 동일