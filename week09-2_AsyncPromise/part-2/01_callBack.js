const fs = require("fs");
let options = { // rs.readFile에서 option인자를 그냥 'utf8'로 해도 된다
  encoding : 'utf8',
  flag : 'r'
}

const getDataFromFile = function (filePath, callback) {
  // TODO: fs.readFile을 이용해 작성합니다
  fs.readFile(filePath, options, (err, data) => {
    if(data) {
      return callback(null, data);
    } else {
      return callback(err, null);
    }
  })
};

// getDataFromFile('README.md', (err, data) => console.log(data));

module.exports = {
  getDataFromFile
};
