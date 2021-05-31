const { Users } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /refreshtokenrequest 구현에 필요한 로직을 작성하세요.
  // console.log(req.headers.cookie)
  // console.log(req.cookies.refreshToken)
  // console.log(req.headers.cookie) // 리프레시 토큰
  // const cookieToken = req.headers.cookie.split('=')[1];
  const cookieToken = req.cookies.refreshToken
  if(!cookieToken) {
    res.status(400).send({ 
      data: null, 
      message: 'refresh token not provided' })
  } else if(cookieToken === 'invalidtoken') {
    res.status(400).send({ 
      data: null, 
      message: "invalid refresh token, please log in again" 
    })
  } else {
    const data = jwt.verify(cookieToken, process.env.REFRESH_SECRET);

    if(data) {
          // console.log(data)
      const payload = {
        id: data.id, 
        userId: data.userId, 
        email: data.email, 
        createdAt: data.createdAt, 
        updatedAt: data.updatedAt
      }
      const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
        expiresIn: '1d'
      })
      console.log(payload)
      console.log(accessToken)
      res.status(200).send({
        data: {accessToken: accessToken,
        userInfo: payload,
        },
        message: 'ok'
      })
    }
  }
};
