// <15> 배치(1),(2),(3)

// (1) 예시
// html 예시
// <div class="container">
//   <div class="item">1</div>
//   <div class="item">2</div>
//   <div class="item">3</div>
// </div>

// css 조정
// .container {
//   width: 300px;
//   background-color: royalblue;
//   position: relative;
// }
// .container .item {
//   border: 4px dashed red;
//   background-color: orange;
// }
// .container .item:nth-child(1) {
//   width: 100px;
//   height: 100px;
// }
// .container .item:nth-child(2) {
//   width: 140px;
//   height: 70px;
//   position: absolute;
//   right: 10px;
//   bottom: 10px;
// }
// .container .item:nth-child(3) {
//   width: 70px;
//   height: 120px;
// }

// (2) position
// 요소의 위치지정 기준
// static : 기준없음
// relative : 요소 자신을 기준
// absolute : 위치 상 부모 요소를 기준
// fixed: 뷰포트(브라우저)를 기준

// top, bottom, left, right, z-index => 음수도 가능함
// 기본값 : auto
// 단위 : px, em, vh 등..

// (3) position: relative
// 이를 갖고 엘리먼트 배치를 진행하면 반드시 빈 공간이 생기므로,
// 개발을 하는 과정에 있어서는 잘 사용하지 않는다 보면 된다.

// 즉, 엘리먼트가 relative로 옮겨갔다고 하더라도 시각적으로만(허상) 그렇고,
// 원래 있는 공간에는 그대로 있다고 할 수 있다.

// (4) position: absolute
// 이 속성은 "위치상" 부모요소를 기준으로 배치한다
// 이 때문에 그냥 자식요소에 이 속성을 넣으면 뷰포트(브라우저)를 기준으로 움직인다.
// 그러므로 부모요소에 position:relative를 넣어줘야 한다
// 그래야 부모요소의 범위 내에서 움직임

// 또한 부모의 부모 요소에 relative를 해놓고 이를 기준으로 하려고 한다면,
// 부모요소에 position: static으로 하면 된다

// (5) position: fixed
// 뷰포트(브라우저)를 기준으로 배치하는 것이다.

// (6) z-index와 요소 쌓임 순서(Stack order)
// 어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지) 결정
// 1. 요소에 position 속성의 값이 있는 경우 위에 쌓임. 기본값 static 제외.
// 2. 1번 조건이 같은 경우, z-index 속성의 숫자 값이 높을 수록 위에 쌓임
// 3. 1번과 2번 조건까지 같은 경우, html의 다음 구조일 수록 위에 쌓임

// 그래서 포지션 값이 있는 요소와 z-index 값만 있는 요소가 대결하면
// 포지션 값이 있는 요소가 더 위에 올라옴
// 하지만 포지션 값이 있어도 static은 기본값이므로 absolute나 relative에 비해 값이 없는 것과 같음

// (7) z-index
// 요소의 쌓임 정도를 지정
// 기본값: 부모 요소와 동일한 쌓임 정도(0)
// 숫자: 숫자가 높을 수록 위에 쌓임
// 음수도 사용되는데 -1 말고는 사용 안함.

// (8) 요소의 display가 자동변경
// position 속성의 값으로 absolute, fixed가 지정된 요소는
// display 속성이 block으로 변경 된다





// <16> 플렉스(정렬) - container

// 1차원 레이아웃
// 요소를 정리하는 축을 차원이라 보면 편하다.

// 일반적으로 display: flex 속성은 요소들을 수직이 아니라 수평으로 배치한다.

// 요소들을 감싸고 있는 부모요소에 플렉스 속성을 부여하면 아래와 같은 추가속성 입력이 가능하다.
// flex-flow
// flex-direction
// flex-wrap
// justtify-content
// align-items

// 그 안에 있는 요소들은 다음과 같은 추가속성 입력이 가능하다
// order
// flex
// flex-grow
// flex-shrink
// flex-basis
// align-self

// (1) display
// flex container의 화면 출력(보여짐) 특성
// flex: 블록 요소와 같이 플렉스 컨테이너 정의
// inline-fliex: 인라인 요소와 같이 플렉스 컨테이너 정의

// (2) flex-direction
// 주 축을 설정
// 기본값: row, 행 축(좌 => 우), 수평으로 배열하는거
// row-reverse: 행 축 (우 => 좌), 역수평으로 배열
// column: 열 축 (위 => 아래), 수직으로 배열하는거
// column-reverse: 열 축 (아래 => 위), 역수직으로 배열

// 시작점, 긑점, 교차축, 주축을 생각하면 편하다

// (3) flex-wrap
// 플렉스 아이템즈 묶음 줄바꿈 여부
// 기본값: nowrap, 묶음(줄 바꿈) 없음
// wrap: 여러 줄로 묶음
// wrap-reverse: wrap의 반대 방향으로 묶음.

// (4) justify-content
// 주 축의 정렬방법
// 기본값: flex-start, flex items를 시작점으로 정렬
// flex-end: flex items를 끝점으로 정렬
// center: flex items를 가운데 정렬
// space-between: 각 flex item 사이를 균등하게 정렬
// space-around: 각 flex item의 외부 여백을 균등하게 정렬

// (5) align-content
// 교차 축의 여러 줄 정렬 방법
// 아이템이 두 줄 이상이어야 작동함!
// 기본값: flex items를 시작점으로 정렬
// flex-start: flex items를 시작점으로 정렬
// flex-end: flex items를 끝점으로 정렬
// center: flex items를 가운데 정렬
// space-between: 각 flex item 사이를 균등하게 정렬
// space-around: 각 flex item의 외부 여백을 균등하게 정렬

// (6) align-items
// 교차 축의 한 줄 정렬 방법
// 기본값: stretch, flex items를 교차 축으로 늘림
// flex-start: flex items를 각 줄의 시작점으로 정렬
// flex-end: flex items를 각 줄의 끝점으로 정렬
// center: flex items를 각 줄의 가운데 정렬
// baseline: flex items를 각 줄의 문자 기준선에 정렬





// <17> 플렉스(정렬) - items

// (1) order
// flex item의 순서
// 기본값: 0, 순서없음
// 숫자: 숫자가 작을 수록 먼저

// (2) flex-grow
// flex item의 증가 너비 비율
// 기본값: 0, 증가 비율없음
// 숫자: 증가 비율
// a,b,c가 있고 a만 flex-grow가 1이면 a가 나머지 공간을 전부 차지한다
// a,b,c가 있고 a제외 b는 flex-grow가 2, c는 1이면 c의 2배만큼 b가 커진다

// (3) flex-shrink
// flex item의 감소 너비 비율
// 기본값: 1, flex container 너비에 따라 감소 비율 적용
// 숫자: 감소 비율

// (4) flex-basis
// flex item의 공간 배분 전 기본 너비
// 기본값: auto, 요소의 content너비
// 단위: px, em, rem등 단위로 지정
// 이 부분을 0으로 설정해야 요소의 가로너비가 시각적으로 깔끔하게 나옴




// <18> 전환 transition

// div:active, div:hover 같은 것

// 요소의 전환(시작과 끝) 효과를 지정하는 단축 속성
// 사용법 => transition: 속성명 지속시간 타이밍함수 대기시간
// transition-property, transition-duration, transition-timing-function, transition-delay

// 시간 관련 단위 s <<= seconds

// (1) transition-property
// 전환 효과를 사용할 속성 이름을 지정
// 기본값: all, 모든 속성에 적용
// 속성이름: 전환 효과를 사용할 속성 이름 명시

// (2) transition-duration
// 전환 효과의 지속시간을 지정
// 기본값: 0s, 전환 효과 없음
// 시간: 지속시간(s)를 지정

// (3) transition-timing-function
// 전환 효과의 타이밍(Easing) 함수를 지정
// 기본값: ease, 느리게-빠르게-느리게
// linear: 일정하게
// ease-in: 느리게-빠르게
// ease-out: 빠르게-느리게
// ease-in-out: 느리게-빠르게-느리게
// cubic-bezier(n,n,n,n): 자신만의 값을 정의(0~1)
// steps(n): n번 분할된 애니메이션

// easing functions를 검색해보면 그래프를 볼 수 있음
// greensock.com에서 easing 함수를 커스텀 할 수 있음

// (4) transition-delay
// 전환 효과가 몇 초 뒤에 시작할지 대기시간을 지정
// 기본값: 0s, 대기시간 없음
// 시간: 대기시간(s)을 지정





// <19> 변환 transform
// 사용법 
// => transform: 변환함수1 변환함수2 변환함수3 ...;
// => transform: 원근법 이동 크기 회전 기울임;

// (1) 2d 변환함수
// -단위: px
// translate(x,y) : 이동(x축, y축)
// translateX(x) : 이동(x축)
// translateX(x) : 이동(y축)
// scale(x,y) : 크기(x축, y축)
// scaleX(x), scaleY(y)도 존재. 하지만 잘 안씀.

// -단위: deg
// rotate(degree) : 회전(각도)
// skew(x,y) : 기울임(x축, y축) => 잘 안씀
// skewX(x): 기울임(x축)
// skewY(y): 기울임(y축)

// matrix(n,n,n,n,n,n): 2차원 변환 효과 => 이것도 있긴 한데 잘 안씀

// (2) 3d 변환함수
// -단위: px
// perspective(n): 원근법(거리) =====> 이걸 제일 많이씀!! 나머지는 잘 안씀..
//  ==> 원근법 함수는 제일 앞에 작성해야 함!
// translateZ(z): 이동(z축)
// translate3d(x,y,z): 이동(x,y,z축)
// scaleZ(z): 크기(z축)
// scale3d(x,y,z): 크기(x,y,z축)
// matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,... 총 16개 인자)

// -단위: deg
// rotateX(x): 회전(x축)
// rotateY(y): 회전(y축)
// rotateZ(z): 회전(z축)
// rotate3d(x,y,z,a): 회전(x축, y축, z축, 각도)

// (3) perspective => 앞에서 배운 함수가 아닌 속성
// 하위 요소를 관찰하는 원근 거리를 지정
// 단위: px등 단위로 지정

// 비교
//      속성/함수                   적용대상        기준점 설정
// perpective: 600px;            관찰대상의 부모    perspective-origin
// transform: perspective(600px);  관찰대상         transform-origin

// (4) backface-visibility
// 3d 변환으로 회전된 요소의 뒷면 숨김 여부
// 기본값: visible, 뒷면 보임
// hidden: 뒷면 숨김



