require('dotenv').config();

const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const axios = require('axios');

module.exports = async (req, res) => {
  // req의 body로 authorization code가 들어옵니다. console.log를 통해 서버의 터미널창에서 확인해보세요!

  // console.log(req.body);
  // { authorizationCode: 'fake_auth_code' }

  // TODO : 이제 authorization code를 이용해 access token을 발급받기 위한 post 요청을 보냅니다. 다음 링크를 참고하세요.
  // https://docs.github.com/en/free-pro-team@latest/developers/apps/identifying-and-authorizing-users-for-github-apps#2-users-are-redirected-back-to-your-site-by-github
  const param = {
    client_id: clientID,
    client_secret: clientSecret,
    code: req.body.authorizationCode
  }
  await axios.post("https://github.com/login/oauth/access_token", param)
  .then(data => {
    res.status(200).send({accessToken: data.data.access_token});
    // console.log(data.data)
    // data: {
    //   access_token: 'fake_access_token',
    //   token_type: 'Bearer',
    //   scope: 'user'
    // }
  })
}
