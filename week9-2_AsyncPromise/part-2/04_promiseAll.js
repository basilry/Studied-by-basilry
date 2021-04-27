const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  // TODO: Promise.all을 이용해 작성합니다
  let a1 = getDataFromFilePromise(user1Path);
  let a2 = getDataFromFilePromise(user2Path);
  return Promise.all([a1, a2])
  .then(values => {
    return values.map(function(data) {
      return JSON.parse(data)
    })
  });
}

// readAllUsers()

module.exports = {
  readAllUsers
}