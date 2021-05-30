module.exports = {
  post: (req, res) => {

    // TODO: 세션 아이디를 통해 고유한 세션 객체에 접근할 수 있습니다.
    // 앞서 로그인시 세션 객체에 저장했던 값이 존재할 경우, 이미 로그인한 상태로 판단할 수 있습니다.
    // 세션 객체에 담긴 값의 존재 여부에 따라 응답을 구현하세요.

    if (!req.session.userId) {
      // your code here
      res.status(400).send({message: `not authorized`})
    } else {
      delete req.session.userId;
      req.session.save(function(){
        res.status(200).send({message: `ok`})
      })
      
      // your code here
      // TODO: 로그아웃 요청은 세션을 삭제하는 과정을 포함해야 합니다.
    }
  },
};
