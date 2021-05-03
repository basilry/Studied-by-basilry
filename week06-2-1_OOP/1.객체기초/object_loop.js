var memberArray = ['egoing', 'graphittei', 'leezhce'];
console.group('array loop')
let i = 0;
while(i < memberArray.length) {
  console.log(i, memberArray[i]);
  i = i + 1;
}
console.groupEnd('array loop')


var memberObject = {
  manager: 'egoing',
  deveoper: 'graphittei',
  designer: 'leezhce'
}
console.group('object loop')
for(let name in memberObject) {
  console.log(name, memberObject[name])
}
console.groupEnd('object loop')
