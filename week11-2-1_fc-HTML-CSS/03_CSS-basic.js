// <1> 기본문법, 주석

// css에다가 특정 태그를 찾아 중괄호{}를 작성하고,
// 그 안에 값들을 작성하여 스타일을 변화시킨다.

// 기본문법형태
// 선택자 { 속성: 값; }

// 선택자 = 스타일을 적용할 대상
// 속성 = 스타일의 종류(property)
// 값 = 스타일의 값(value)
//  : = ~은
//  ; = ~이다.

// 선택자 { 속성: 값; 속성: 값; }
// => 이렇게 중괄호를 열고 닫아서 스타일 범위를 확정한다.

// ex) div {color: red; margin: 20px;}
// 이렇게 쓰기 보다는..

// div {
//   color: red;
//   margin: 20px;  
// }
// 이렇게 쓰라

// 들여쓰기 내어쓰기를 통해, 코드를 이쁘게, 명시적으로 작성하는 습관을 들여라.
// 왜냐? 내가 쓰는 코드는 나만 보는 코드가 아니기 때문이다.
// 협업을 위해서라도 꼭 보기 편하게 적어야 한다.

// 내용에 대한 설명은 주석처리를 해서 적자.
// /* 내용 설명 */ 이렇게!





// <2> 선언방식

// (1) 내장방식
// <style></style>의 내용(contents)로 스타일을 작성하는 방식
// 권장하지 않는 방식이다.
// 추후 번들로 배포할 때 컴퓨터가 자동으로 내장시키는 경우가 있는데,
// 그런 경우가 아니면 굳이 할 필요가 없다.

// (2) 인라인방식
// <div style="color: red; margin: 20px;"></div>
// 선택자 없음. 어차피 그 안에다가 적기 때문.
// 이렇게 하면 너무 우선순위가 되기때문에 css파일로 수정할때 문제가 생김.
// 즉, 나중에 유지보수할 때 악영향을 미친다. 권장하지 않는 방식.

// (3) 링크방식
// <link rel="stylesheet" href="./css/main.css">
// html파일의 head 쪽에 작성하여 외부파일을 연결하는 방식.
// 병렬방식.

// (4) import 방식
// <link rel="stylesheet" href="./css/main.css">
// 이렇게 한 다음, main.css에다가 새로운 css파일을 Import해온다.
// @import url("./box.css")
// 일반적으로 많이 사용되는 방식은 아님.
// main.css 파일의 내용이 많다면 import해온 파일을 읽는 시간이 느려짐.
// 직렬방식.





// <3> 선택자 : 기본

// (1) 전체 선택자
// *로 하면 된다.
// ex)
// * {color: red;}


// (2) 태그 선택자
// 태그이름에 해당하는 요소를 선택한다.
// li를 태그선택자로 하면 li태그가 전원 선택됨.
// ex)
// li {color: red;}


// (3) 클래스 선택자
// 클래스 속성의 값이 해당하는 요소를 전원 선택한다.
// .을 앞에 쓰고 뒤에 클래스 이름을 씀.
// ex)
// .orange {color: red;}


// (4) 아이디 선택자
// 아이디 속성의 값이 해당하는 요소를 선택한다.
// #을 앞에 쓰고 뒤에 아이디 이름을 씀.
// ex)
// #orange {color: red;}





// <4> 선택자 : 복합

// (1) 일치 선택자 abc.xyz {속성: 값;}
// 선택자 abc와 xyz를 동시에 만족하는 요소를 선택하는 것.
// 붙여서 작성해야 한다.
// 단, 태그선택자를 앞에 써야 인식오류가 안생긴다.
// ex)
// span.orange {color: red;}


// (2) 자식 선택자 abc > .xyz {속성: 값;}
// 선택자 abc의 자식요소 xyz 선택
// ex)
// ul > .orange {color: red;}


// (3) 하위 선택자 abc .xyz {속성: 값;}
// 선택자 abc의 하위요소 xyz 선택
// '띄어쓰기'가 선택자의 기호.
// ex)
// div .orange{color: red;}


// (4) 인접형제 선택자*** .abc + xyz {속성: 값;}
// 선택자 abc의 다음 형제 요소 xyz '하나'를 선택.
// ex)
// .orange + li {color: red;}


// (5) 일반형제 선택자 .abc ~ xyz {속성: 값;}
// 선택자 abc의 다음 형제 요소 xyz '모두'를 선택
// ex)
// .orange ~ li {color: red;}





// <5> 선택자 : 가상클래스

// (1) abc:hover {속성: 값;}
// 해당 태그가 렌더링 된 html에서 커서를 올리면 변화를 일으킴.
// 즉, 선택자 abc 요소에 마우스 커서가 올라가 있는 동안 선택되는 것.
// 태그의 원본 스타일객체에 transition: 1s;를 하면 급변이 아닌 서서히 변화를 일으킴.


// (2) abc:active {속성: 값;}
// 선택자 abc 요소에 마우스를 클릭하고 있는 동안 선택.
// hover와는 비슷하지만 올리는 것과 클릭하는 것의 차이가 있다.


// (3) abc:focus {속성: 값;}
// 선택자 abc요소가 포커스되면 선택한다.
// focus가 될 수 있는 요소는 html 대화형 콘텐츠가 해당된다.
// input, a, button, label, select 등 여러 요소가 있다.
// ex) <input type:"text" />를 예로 들자면,
// 입력을 하기 위해 입력창을 클릭하여 입력커서가 깜빡이면 색깔이 들어오는 식이다.

// 그리고 html 대화형 콘텐츠 요소가 아니더라도,
// tabindex 속성을 사용한 요소도 focus가 될 수 있다.
// ex) <div class="box" tabindex="-1"></div>
// 이렇게 하면 박스에서도 포커스를 사용할 수 있음.

// 하지만 인풋 텍스트와 인풋 박스 둘다 포커스를 하게 되었을 시,
// 한 화면에서는 하나의 포커스만 가능 하므로, 하나를 선택하면 다른 하나의 포커스가 풀린다.


// (4) abc:first-child {속성: 값;}
// 선택자 abc가 형제 요소 중 첫째라면 선택하는 것.
// ex) .fruits span:first-child {color: red;}


// (5) abc:last-child {속성: 값;}
// 선택자 abc가 형제 요소 중 막내라면 선택하는 것.
// ex) .fruits h3:last-child {속성: 값;}


// (6) abc:nth-child(n) {속성: 값;}
// 선택자 abc가 형제 요소 중 (n)째라면 선택.
// ex) .fruits *:nth-child(2) {color: red;}

// 여기서 n은 0부터 시작한다.
// 짝수 : 2n을 쓰게되면 0,2,4,6,8...의 요소를 선택하게 된다.
// 홀수 : 2n+1을 쓰게 되면 1,3,5,7,9...의 요소를 선택하게 된다.


// (7) abc:not(xyz) {속성: 값;}
// 선택자 xyz가 아닌 abc요소를 선택.
// ex) .frutis *:not(span) {color: red;}





// <6> 선택자 : 가상 요소

// (1) abc::before {속성: 값;}
// 선택자 abc 요소의 내부 앞에 내용을 삽입.
// 인라인, 글자 요소.
// ex) 
// css에서는 =>  .box::before {content: "앞!";}
// html에서는 => <div class="box">Content!</div>
// 브라우저에서는 => 앞!Content!


// (2) abc::after {속성: 값;}
// 선택자 abc 요소의 내부 뒤에 내용을 삽입.
// 인라인, 글자 요소.
// ex)
// css에서는 =>  .box::after {content: 뒤!";}
// html에서는 => <div class="box">Content!</div>
// 브라우저에서는 => Content!뒤!


// 위와같은 요소들은 모두 인라인(글자) 요소이기 때문에 width와 height가 먹지 않는다.
// 그래서 이를 적용하려면 display: block; 이라고 스타일 속성에 추가를 해줘야 한다.





// <7> 선택자 : 속성

// (1) [abc] {속성: 값;}
// 속성 abc를 포함한 요소를 선택한다.
// 예시 html)
// <input type="text" value="basilry">
// <input type="password" value="1234">
// <input type="text" value="abcd" diabled>

// 위와 같은 상황일 시, [disabled]{color: red;}라고 한다면 3번째 요소가 적용된다.
// 만약 [type]{color: red;}라고 한다면 3개의 요소 모두가 다 적용된다.
// 이 때문에 특정되는 요소를 선택할 때는 좋지만, 그 외에는 모두가 다 해당되므로 좀 구리다.


// (2) [abc="xyz"]{color: red;}
// 속성 abc을 포함하고 값이 xyz인 요소 선택.
// ex) [type="password"]{color: red;}라고 한다면 위의 예시에서 2번째 요소가 적용된다.





// <8> 스타일 상속

// (1) 기본내용
// 예시 html
// <div class="ecosystem">생태계
//   <div class="animal">동물
//     <div class="tiger">호랑이</div>
//     <div class="lion">사자</div>
//     <div class="elephant">코끼리</div>
//   </div>
//   <div class="plant">식물</div>
// </div>

// 이 상황에서 .animal {color: red;}라고 하면,
// 화면에 출력될 때 animal 클래스를 지닌 엘리먼트 포함 그의 자식 엘리먼트들은 모두 빨간색으로 출력된다.

// 이렇게 상속이 되는 css 속성들은 모두 글자/문자와 관련된 속성들이다.
// 모든 글자/문자 속성은 아님에 주의하자.
// ex) font-style, font-weight, font-size, line-height, font-family, color, text-align 등등..


// (2) 강제 상속
// 강제상속은 실질적으로 상속되지 않는 css 내용을 강제로 상속시키게끔 하는 것을 말한다.

// html 예시
// <div class="parent">
//   <div class="children"></div>
// </div>

// css 예시
// .parent {
//   width: 300px;
//   height: 200px;
//   background-color: orange;
// }
// .children {
//   width: 100px;
//   height: inherit;
//   background-color: inherit;
//   position: fixed;
//   top: 100px;
//   right: 10px;
// }

// 이 상황에서 children이라는 클래스를 가진 엘리먼트의 css 속성으로 inherit을 하게 되면,
// 상위 요소인 parent 클래스를 지닌 엘리먼트의 css 속성을 강제로 상속하게 된다.
// 그래서 전체를 다 바꿀 필요 없이 parent만 바꾸면 된다.

// *참고: 여기서 쓰인 position, top, right는 위치를 고정하고 확정하는 속성들이다.