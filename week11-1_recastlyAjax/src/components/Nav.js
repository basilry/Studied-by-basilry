import React from 'react';
import Search from './Search';

// const Nav = () => (
//   <nav className="navbar">
//     <div className="col-md-6 col-md-offset-3">
//       <Search />
//     </div>
//   </nav>
// );


// App.js에서 전달해준 props를 search로 전달해주기 - 테스트 통과
const Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleButtonClick={props.handleButtonClick}/>
    </div>
  </nav>
);

export default Nav;
