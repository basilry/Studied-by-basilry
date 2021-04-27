const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

async function readAllUsersAsyncAwait() {
  // TODO: async/await 키워드를 이용해 작성합니다
  let arr = [];
  const a1 = await getDataFromFilePromise(user1Path)
  const a2 = await getDataFromFilePromise(user2Path);

  arr.push(JSON.parse(a1))
  arr.push(JSON.parse(a2))

  return arr;
}

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}