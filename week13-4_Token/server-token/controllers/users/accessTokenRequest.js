const { Users } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /accesstokenrequest 구현에 필요한 로직을 작성하세요.
  // console.log(req.headers.authorization)
  const authorization = req.headers['authorization'];
  if(authorization === undefined) {
    res.status(400).send({data: null, message: 'invalid access token'})
  } else {
    const token = authorization.split(' ')[1];
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    if(data) {
      res.status(200).send({
        data: {
          userInfo: {
            id: data.id, 
            userId: data.userId, 
            email: data.email, 
            createdAt: data.createdAt, 
            updatedAt: data.updatedAt
          }
        },
        message: 'ok'
      })
    }
  }
};



// 왜 authorization.split을 사용하는지, 왜 1번째 인덱스의 값을 얻는지 console.log를
// 사용해 확인해보세요!
