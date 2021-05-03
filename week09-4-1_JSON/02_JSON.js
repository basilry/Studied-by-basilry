// <2> Object to JSON
// stringify(obj)

let json = JSON.stringify(true);
console.log(json) // true



json = JSON.stringify(['apple', 'banana'])
console.log(json) // ["apple","banana"]



const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // symbol: Symbol('id'), // symbol 같이 js 내장메소드도 제이슨에 포함이 안된다.
  jump: () => {
    console.log(`${this.name} can jump!`) // 함수는 제이슨에 포함되지 않는다.
  },
}

json = JSON.stringify(rabbit); // 데이터 전체 가져오기
console.log(json) // {"name":"tori","color":"white","size":null,"birthDate":"2021-04-30T08:01:10.484Z"}

json = JSON.stringify(rabbit, ['name', 'color', 'size']) // 데이터 일부 가져오기
console.log(json) // {"name":"tori","color":"white"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`)
  return key === 'name' ? 'ellie' : value;
})
console.log(json)






// <3> JSON to Object
// parse(json)

// console.clear()
// json = JSON.stringify(rabbit);
// console.log(json) // {"name":"tori","color":"white","size":null,"birthDate":"2021-04-30T08:28:34.961Z"}
// const obj = JSON.parse(json)
// console.log(obj) // {name: "tori", color: "white", size: null, birthDate: "2021-04-30T08:25:58.844Z"} // 열 수 있음
// rabbit.jump(); // 함수실행은 된다!
// // obj.jump() // 이렇게 하면 오류가 난다! - 애당초 obj에 함수가 포함이 안되어 있던것...!

// console.log(rabbit.birthDate.getDate()) // 30
// // console.log(obj.birthDate.getDate()) // 이렇게 하면 오류가 난다!
// console.log(obj.birthDate) // 2021-04-30T08:27:42.096Z



console.clear()
json = JSON.stringify(rabbit);
console.log(json) // {"name":"tori","color":"white","size":null,"birthDate":"2021-04-30T08:28:34.961Z"}
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`)
  return key === 'birthDate' ? new Date(value) : value;
})
console.log(obj) // {name: "tori", color: "white", size: null, birthDate: "2021-04-30T08:25:58.844Z"} // 열 수 있음
rabbit.jump(); // 함수실행은 된다!

console.log(rabbit.birthDate.getDate()) // 30
console.log(obj.birthDate) //Fri Apr 30 2021 19:03:28 GMT+0900 (대한민국 표준시)
console.log(obj.birthDate.getDate()) // 30