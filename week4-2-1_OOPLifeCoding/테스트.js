let kim = {
  name: 'kim',
  first:10, second:20,
  sum:function(){return this.first + this.second}
}
console.log(kim.sum()) // 30


let lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function() {
  return (this.first + this.second) /2
}
console.log(lee.sum()) //20
console.log(lee.avg()) //10