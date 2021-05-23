import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Link, NavLink, Route, Switch, useParams} from 'react-router-dom';



function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

let contents = [
  {id: 1, title:"HTML", description: "HTML is..."},
  {id: 2, title:"JS", description: "JS is..."},
  {id: 3, title:"React", description: "React is..."}
]

function Topic() {
  let params = useParams();
  let topic_id = params.topic_id
  var selected_topic = {
    title: "Sorry",
    description: "Not Found"
  }
  for(let i = 0; i < contents.length; i++) {
    if(contents[i].id === Number(topic_id)) {
      break;
    }
  }
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  )
}

function Topics() {
  let list = [];
  for(let i = 0; i < contents.length; i++) {
    list.push(<li key={contents[i].id}><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {list}
      </ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
      {/* <Switch> */}
        {/* <Route path="/topics/1">
          HTML is...
        </Route>
        <Route path="/topics/2">
          JS is...
        </Route>
        <Route path="/topics/3">
          React is...
        </Route> */}
      {/* </Switch> */}
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}




function App () {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not found</Route>
      </Switch>
    </div>
  )
}

// 1. Route
// 페이지를 분할하는 역할을 한다. 특히 path를 통해 페이지 주소를 확정할 수 있다.
// react-router-dom을 npm으로 설치하여 사용가능하다.
// npm install react-router-dom
// exact path를 갖고 루트 페이지를 중복 출력하지 않게끔 할 수 있다.

// 2. Switch
// 스위치로 감싸게 되면 exact를 쓰지 않고도 그 효과를 낼 수 있다.
// 즉, 패스와 일치하는 첫번째 컴포넌트가 발견되면 나머지 컴포넌트는 버리게 된다. 
// 그래서 루트페이지에 exact를 쓰지 않는다면, 루트페이지만 계속 나오게 된다.

// 3. Link
// 싱글페이지 앱에서 중요한 것은 페이지가 리로딩 되지 않고 
// 동적으로 가져오는 데이터는 항상 비동기적으로 데이터를 가져와야 한다(실시간).
// a태그를 쓰면 페이지가 항상 리로딩 되는 것이고,
// Link컴포넌트를 사용하면 페이지가 변하지 않는다.

// 4. HashRouter
// 렌더쪽에 BrowserRouter가 아닌 HashRouter로 감쌀 수 있다.
// 만약 어떤 패스를 들어오건간에 루트페이지에 있는 html 파일을 서비스 할 수 있다면
// 브라우저라우터를 쓰면 된다. 근데 그게 안된다면 해쉬 라우터를 쓰면 된다.

// 5. NavLink
// Link컴포넌트 대신 NavLink컴포넌트를 사용하고, 루트 페이지만 exact를 사용하게 된다면
// 사용자가 어떤 페이지에 있는지 직관적으로 elements창에 active 클래스를 추가하여
// 확인할 수 있게끔 한다.

// 6. Nested Routing
// 라우트 안에 라우트를 중첩하여 페이지를 더욱 분할할 수 있다.

// 7. Parameter
// 수동으로 li태그를 만들어서 링크를 만들 수 있지만, 페이지가 수만가지가 되면 굉장히 피곤해질 것이다.
// 그렇기 때문에 객체, 배열과 포문 반복문을 통해 자동으로 링크리스트를 만들면 더 편하다.


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

