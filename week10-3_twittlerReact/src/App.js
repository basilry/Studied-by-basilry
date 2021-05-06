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
    this.new_tweet = this.new_tweet.bind(this);
  }

  new_tweet(event) {
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
      tweets: [
        ...this.state.tweets,
        {
          ...submitTweet,
        }
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
        <textarea id="new-tweet-content" value={this.state.message} onChange={this.new_tweet}></textarea>
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