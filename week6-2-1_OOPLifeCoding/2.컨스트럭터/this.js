let k = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function(){
    return this.first + this.second;
  }
}



// console.log(kim.sum(kim.first, kim.second))
console.log(k.sum())





//this는?? : 그 디스가 속해있는 메소드가 속해있는 
// 객체를 가르키도록 약속된 특수한 예약어, 특수한 약속
// >> 이는 결과적으로 나 자신(객체)을 호출하는 것!!