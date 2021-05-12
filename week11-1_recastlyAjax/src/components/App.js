import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import LoadingIndicator from "./LoadingIndicator";
import { fakeData } from './__test__/fakeData';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      currentVideo: null,
      isLoading: true
    }

    this.setCurrentVideo = this.setCurrentVideo.bind(this)
    this.searchVideo = this.searchVideo.bind(this)
  }

  componentDidMount() {
    // side effect를 일으키는 searchVideo 함수는 componentDidMount에서 처리합니다.
    this.searchVideo('무한도전')
  }

  setCurrentVideo(video) {
    this.setState({
      currentVideo: video
    })
  }

  searchVideo(queryString) {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCFt0RkxvzDhHtuc3zVVlHCBntESNYwXX4&q=${queryString}&type=video&videoEmbeddable=true`
    fetch(url)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      return this.setState({
        videos: result.items,
        currentVideo: result.items[0],
        isLoading: false
      })
    })
  }

  //렌더 내부 Nav 부분의 핸들버튼클릭 프롭스 전달추가 - App: part2의 3번째 테스트케이스 통과
  render() {
    return (
      <div>
        <Nav handleButtonClick={this.searchVideo} />
        {this.state.isLoading ?
          <LoadingIndicator />
          :
          <div className="parent">
            <VideoPlayer video={this.state.currentVideo} />
            <VideoList videos={this.state.videos} handleClickEntry={this.setCurrentVideo} />
          </div>
        }
      </div>
    )
  }
}

export default App;
