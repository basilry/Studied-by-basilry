import React from 'react';


// const Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       검색
//     </button>
//   </div>
// );

//클래스로 변환 - 1번째 테스트
class Search extends React.Component {
  constructor(props) {
    super(props);
    //queryString 키 추가할것 - 2번째 테스트
    this.state = {
      queryString: 'd'
    }
  }

  // onChange, onClick은 정해져있는 예약어들. 변경하면 안된다.
  // 온체인지로 queryString 변화 작성 - 3번째 테스트
  // 온클릭으로 search.js에서 내려받은 핸들버튼클릭함수 실행(내용은 쿼리스트링 값) - 4번째 테스트
  render() {
    return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" 
      onChange={event => this.setState({queryString: event.target.value})} />
      <button className="btn hidden-sm-down"
       onClick={() => {this.props.handleButtonClick(this.state.queryString)}}>
        검색
      </button>
    </div>
    )
  }
}

export default Search;