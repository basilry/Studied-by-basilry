import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { fakeData } from './__test__/fakeData';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: fakeData,
      currentVideo: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(currentVideo) {
    this.setState({currentVideo})
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="parent">
          <VideoPlayer video={this.state.currentVideo || fakeData[0]}/>
          <VideoList handleClick={this.handleClick} videos={this.state.videos}/>
        </div>
      </div>
    )
  }
}




export default App;
