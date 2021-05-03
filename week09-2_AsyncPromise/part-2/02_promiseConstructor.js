const fs = require("fs");
let options = {
  encoding : 'utf8',
  flag : 'r'
}

const getDataFromFilePromise = filePath => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, options, (err, data) => {
      if(!data) {
        reject(err)
      } else {
        resolve(data)
      }
    });
  })
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.

};

// getDataFromFilePromise('README.md').then(data => console.log(data));

module.exports = {
  getDataFromFilePromise
};
