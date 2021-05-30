const { Users } = require('../../models');

module.exports = {
  get: async (req, res) => {

    // TODO: 세션 객체에 담긴 값의 존재 여부에 따라 응답을 구현하세요.
    // HINT: 세션 객체에 담긴 정보가 궁금하다면 req.session을 콘솔로 출력해보세요
    // console.log(req)
    // console.log(req.session)
    if (!req.session.userId) {
      // your code here
      res.status(400).send({message: `not authorized`})
    } else {
      const userInfo = await Users.findOne({
        where: { userId: req.session.userId },
      });
      res.status(200).send({
        data: userInfo,
        message: `ok`
      })
      // your code here
      // TODO: 데이터베이스에서 로그인한 사용자의 정보를 조회한 후 응답합니다.
    }
  },
};
