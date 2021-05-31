import React, { Component } from "react";
import axios from 'axios';
const FILL_ME_IN = 'FILL_ME_IN'

class Mypage extends Component {

  constructor(props) {
    super(props);
    // console.log(props)
    // { accessToken: 'fakeAccessToken' }
    this.state = {
      images: [],
      name: '',
      login: '',
      html_url: '',
      public_repos: ''
      // TODO: GitHub API 를 통해서 받아올 수 있는 정보들 중에서
      // 이름, login 아이디, repository 주소, public repositoty 개수를 포함한 다양한 정보들을 담아주세요.
    }
  }

  async getGitHubUserInfo() {
    // TODO: GitHub API를 통해 사용자 정보를 받아오세요.
    // https://docs.github.com/en/free-pro-team@latest/rest/reference/users#get-the-authenticated-user
    // console.log(this.props)
    await axios.get('https://api.github.com/user', { 
      headers: {authorization: `token ${this.props.accessToken}` }
    })
    .then(res => {
      this.setState({
        ...res.data
      })
    })
  }

  async getImages() {
    // TODO : 마찬가지로 액세스 토큰을 이용해 local resource server에서 이미지들을 받아와 주세요.
    // resource 서버에 GET /images 로 요청하세요.
    await axios.get('http://localhost:8080/images', {
      headers: {authorization: `token ${this.props.accessToken}`}
    })
    .then(res => {
      this.setState({
        images: res.data.images
      })
    })
  }

  componentDidMount() {
    this.getGitHubUserInfo()
    this.getImages()
  }

  render() {
    const { accessToken } = this.props
    // console.log(this.props)
    // { accessToken: 'fakeAccessToken' }

    if (!accessToken) {
      return <div>로그인이 필요합니다</div>
    }

    return (
      <div>
        <div className='mypageContainer'>
          <h3>Mypage</h3>
          <hr />

          <div>안녕하세요. <span className="name" id="name">{this.state.name}</span>님! GitHub 로그인이 완료되었습니다.</div>
          <div>
            <div className="item">
              나의 로그인 아이디:
              <span id="login">{this.state.login}</span>
            </div>
            <div className="item">
              나의 GitHub 주소:
              <span id="html_url">{this.state.html_url}</span>
            </div>
            <div className="item">
              나의 public 레포지토리 개수:
              <span id="public_repos">{this.state.public_repos}</span>개
            </div>
          </div>

          <div id="images">
            {this.state.images.map((el, idx) => 
              <img src={el.blob} key={idx}></img>
            )}
          </div>
        </div>
      </div >
    );
  }

}

export default Mypage;
