import React from 'react';
import axios from 'axios'

// const FILL_ME_IN = 'FILL_ME_IN';

function Mypage(props) {
  // console.log(res)
  // console.log(props)
  const handleLogout = () => {
    // console.log(props)
    // TODO: 서버에 로그아웃 요청을 보낸다음 요청이 성공하면 props.logoutHandler를 호출하여 로그인 상태를 업데이트 해야 합니다.
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ title: 'React POST Request Example' })
    };
    axios('https://localhost:4000/users/logout', requestOptions)
      .then(res => {
        if(res.data.message === 'ok') props.logoutHandler()
      })

    // if(Object.keys(props.userData).length !== 0) props.logoutHandler();
 
  };

  return props.userData == null ? (
    <div>Loading...</div>
  ) : (
      <div>
        <div className='mypageContainer'>
          <div>
            <span className='title'>Mypage</span>
            <button className='logoutBtn' onClick={handleLogout}>
              logout
            </button>
          </div>
          <hr />

          <div>
            안녕하세요. <span className='name'>{props.userData.userId}</span>님! 로그인이 완료되었습니다.
          </div>
          <br />
          <div className='item'>
            나의 유저 네임: {props.userData.userId}
          </div>
          <div className='item'>
            나의 이메일 주소: {props.userData.email}
          </div>
        </div>
      </div>
    );
}

export default Mypage;
