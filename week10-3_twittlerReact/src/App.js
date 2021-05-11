import React from "react"
import './App.css';

// 기존의 껍데기 만들 때 썼던 코드
// function App() {
//   return (
//     <div className="App">
//       <div>작성자: 김바실리</div>
//       <div className="writing-area">
//         <textarea id="new-tweet-content"></textarea>
//         <button id="submit-new-tweet">new tweet!</button>
//       </div>
//       <ul id="tweets">
//         <Tweet name="김강서" date="2021-05-04" content="날이 참 좋네요"></Tweet>
//         <Tweet name="박마포" date="2021-05-05" content="어린이 날은 나들이죠"></Tweet>
//         <Tweet name="이강남" date="2021-05-06" content="나들이는 무슨 코딩이나 해!!"></Tweet>
//       </ul>
//     </div>
//   );
// }

//엘리먼트는 리턴 옆에서 시작해야 한다. 엔터치면 안된다.
// function Tweet(props) {
//   return <div> 
//     <div>작성자: {props.name}</div>
//     <div>트윗 내용: {props.content}</div>
//   </div>
// }



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          id: 1,
          name: "이강남",
          date: "2021-05-06",
          content: "나들이는 무슨 코딩이나 해!!"
        },
        {
          id: 2,
          name: "박마포",
          date: "2021-05-05",
          content: "어린이 날은 나들이죠"
        },
        {
          id: 3,
          name: "김강서",
          date: "2021-05-04",
          content: "날이 참 좋네요"
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({value: event.target.value})
  }

  submit(content) {
    const submitTweet = {
      id: this.state.tweets.length+1,
      name: "김바실리",
      date: this.whatTimeNow(),
      content: content
    }
    this.setState({
      // tweets: [
      //   ...this.state.tweets,
      //   {
      //     ...submitTweet,
      //   }
      // ]
      tweets: [
        ...this.state.tweets, submitTweet
      ]
    })
  }

  whatTimeNow() {
    var d = new Date(), 
      month = '' + (d.getMonth() + 1), 
      day = '' + d.getDate(), 
      year = d.getFullYear(); 
    
    if (month.length < 2) month = '0' + month; 
    if (day.length < 2) day = '0' + day; 
    
    return [year, month, day].join('-');
  }

  componentDidMount() {
    console.log("생성 전");
  }

  componentDidUpdate() {
    console.log("보여주기 전");
  }

  componentWillUnmount() {
    console.log("삭제 전");
  }

  render() {
    return (
      <div className="App">
      <div id="writer">작성자: 김바실리</div>
      <div className="writing-area">
        <textarea id="new-tweet-content" value={this.state.message} onChange={this.handleClick}></textarea>
        <button 
          id="submit-new-tweet" 
          onClick= {() => {
            this.submit(this.state.value)
          }}
          >new tweet!</button>
      </div>
      <ul id="tweets">
        {this.state.tweets.map(el => <Tweet props={el} key={el.id}></Tweet>)}
      </ul>
    </div>
    )
  }
 
}


function Tweet({props}) {
  let {name, date, content} = props
  return (
  <li className="tweet"> 
    <div className="username">{name}</div>
    <div className="tweetdate">{date}</div>
    <div className="tweetcontent">{content}</div>
  </li>
  )
}





export default App;



// ***질문에 대한 답***

// 1. JSX관련 문제
// 1-1. JSX 문법을 도입하게 된 이유가 무엇일까요? 어떤 장점이 있나요?
  // => 자바스크립트의 확장문법으로써, js파일 안에서 html을 형성하고 수정할 수 있다. 관심사 분리(html <-> css)라는 측면에서 생각할 때는 안 좋다고 볼 수 있으나, 어차피 js와 리액트 같은 라이브러리가 등장함으로 인해 dom을 js파일 자체에서 처리 가능하므로 html 파일 자체가 크게 중요하지 않아졌다 볼 수 있다.
// 1-2. JSX를 사용하지 않고 React를 사용할 수도 있나요? (advanced)
  // => 가능하다. 하지만 매번 dom을 작성할 때마다 React.createElement와 같은 불필요한 코드를 작성해야 하므로 효율성이 떨어진다.
// 1-3. JSX에 JavaScript 표현식을 쓰려면 어떤 방법으로 써야 하나요?
  // => 엘리먼트 내 중괄호 안에다가 써야함
// 1-4. import / export 구문은 어떤 식으로 사용할 수 있나요?
  // => import는 js 문서 최상단에서 import React from "react"로 가져오면 된다.
  // => export는 js 문서 최하단에서 export default App로 쓰면 된다. 여기서 App은 해당문서의 클래스나 모든 컴포넌트의 뼈대가 되는 펑션임.


// 2. Component와 Props
// 2-1. DOM을 처음 배울 때 페이지 단위로 작업하는 방법과 비교해서, 컴포넌트 단위로 개발할 때의 장점은 무엇인가요?
  // => DOM으로 html에 간섭할 때에는 (1)일일이 다 정해져있는 엘리먼트를 갖고 해야하고, (2)하나가 변경되면 전체적인 구조를 신경써야했음.
  // => 리액트로 html을 형성할 때에는 (1)기본골격 뺴고는 전부 컴포넌트 단위로 부품적 개념을 갖고 엘리먼트를 관리하니 편했고, (2)이 때문에 부품을 끼워맞추듯 일부만 변경해서 바꾸면 되니 편했다.
// 2-2. 하나의 컴포넌트에서 여러 개의 엘리먼트를 리턴할 수도 있나요?
  // => 가능하다. Fragmnet를 사용하지 않는다면 따로 div로 감싸야 하지만, Fragment를 사용하면 div로 감싸지 않고도 원하는 엘리먼트들을 추가 변경 가능하다. 사용법은 <React.Fragment></React.Fragment>이거나, <></>이다.
// 2-3. <Tweet>나의 새 트윗</Tweet>이라는 컴포넌트 사용 방법이 있다고 가정할 때, 컴포넌트 내에서 나의 새 트윗이라는 문자열은 어떻게 접근할 수 있나요?
  // => 따로 function Tweet(props)라는 외부 컴포넌트를 만들어서, 거기서 수정을 하면 된다.
// 2-4. props를 다룰 때에 지켜야 하는 엄격한 규칙이 하나 있습니다. 무엇인가요?
  // => state와는 다르게 수정을 하면 안된다. 불변 값을 넣어야 함.


// 3. 조건부 렌더링
// 3-1. 다음 코드는 왜 잘못되었을까요? 어떻게 바르게 고칠 수 있을까요?
// const tweet = <Tweet writer="김코딩">
//   {
//     if (nowLearning) {
//       return '리액트'
//     } else {
//       return '배틀그라운드'
//     }
//   }는 늘 짜릿하네요
// </Tweet>
  //  => 해당 내용은 수정하고, 외부 컴포넌트를 형성해서 그 안에 삼항연산자를 넣는다.


// 4. 리스트와 Key
// 4-1. 컴포넌트에서 배열의 갯수만큼 엘리먼트를 렌더링하고자 할 때, 어떤 방법으로 렌더링할 수 있나요?
  // => map함수를 사용해서 그 안의 항목들을 배열의 갯수만큼 렌더링 할 수 있다.
  // ex) 
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
// <li>{number}</li>
// );
// 4-2. 컴포넌트에서 배열의 갯수만큼 엘리먼트를 렌더링할 때에 발생하는 아래와 같은 경고의 의미는 무엇이며, 어떻게 해결할 수 있나요?
//   warning: each child in a list chould have a unique "key" prop.
//     check the top-level render call using <ul>. see~ 머시기 머시기
  // => 'key'라는 요소는 리액트 내부에서 엘리먼트 리스트를 만들 때 포함해야 하는 특수한 문자열 속성이다. 이 것이 누락되면 해당 오류가 뜨고, 이를 해결하려면 따로 위의 함수를 아래처럼 만들어야 한다.
  // ex)
//   const listItems = numbers.map((number) =>
//   <li key={number.toString()}>
//     {number}
//   </li>
// );


// 5. state // 홍식님 체크포인트 강의 판서 확인할 것!
// 5-1. props와 state의 차이점은 무엇인가요?
  // => props는 외부의 컴포넌트로 전달받은 값이며 변경이 불가능 하고, state는 내부의 속성이 변화한 값이며 변경이 가능하다.
// 5-2. 상태를 변경할 때 사용되는 this.setState는 어떻게 사용하나요?
  // => 기본 뼈대 펑션을 class로 변경하고, 그 안에 컨스트럭터를 만든 후, 내부 props에 연결되는 this.props를 this.state로 변경하게 되면 기본적인 this.state 값이 확정된다. 그 후 state값에 대한 별도 변화가 요구된다면 부가적인 컴포넌트 작성 후 this.setState를 통해 해당 부분만 수정이 가능하다.
// 5-3. 직접 this.state를 할당하거나, this.state의 키값을 수정하면 안되는 이유는 무엇인가요? 왜 꼭 this.setState를 사용해야만 할까요?
// 5-4/ React에서 이벤트를 처리할 때에 HTML에서와 다른 특징은 무엇인가요?
// 5-5. 이벤트 처리시, 이벤트 핸들러를 다음과 같이 this 바인딩을 해줘야 하는 이유가 무엇인가요?
// this.handleClick = this.handleClick.bind(this);
// 또는
// <button onClick={this.handleClick.bind(this)}>


//*리액트의 가장 큰 특징 : 단방향 데이터 플로우


//*setState 활용법
// 1. setState(새 상태 객체)
//    => 이전 상태를 참조하지 않아도 될때

// 2. setState((이전상태, props) => {
//   return 새 상태 객체
// })
//    => 이전 상태를 참조해야 할 때 사용

// immutability 유지 매우 중요!!
// => react에서는 상태 값을 assign 해서 바꾸지 않는다!

// mutable 한 녀석들 : push, splice, pop, shift, unshift
// immutable 한 녀석들 : map, filter, slice, reduce, spread operator


//*함수형 컴포넌트는 상태가 없을 때 쓰고
//선언형 컴포넌트는 상태가 있을 때 쓴다.


//*webpack = npm build를 통해 번들을 만드는 것 => 배포하기 위한 코드암호화