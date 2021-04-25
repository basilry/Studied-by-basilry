var memberArray = ['egoing', 'graphittei', 'leezhce'];
console.log(memberArray[2])

var memberObject = {
  manager: 'egoing',
  deveoper: 'graphittei',
  designer: 'leezhce'
}
memberObject.designer = 'leezche'
console.log(memberObject['designer'])
delete memberObject.manager
console.log(memberObject.manager)