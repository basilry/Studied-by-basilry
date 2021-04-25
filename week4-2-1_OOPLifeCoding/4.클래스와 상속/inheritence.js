class Person{
  constructor(name, first, second){ 
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum(){
    return 'prototype : '+(this.first + this.second);
  }
  // avg(){
  //   return (this.first + this.second) /2;
  // }
  //이 클래스가 내가 만든게 아니라 가져다 쓰는 라이브러리 혹은 남의 꺼라면,
  //수정하게 되면 이 클래스가 업데이트 될 때 우리가 작업한 것이 수정되거나 코드가 막히거나 하는 경우 존재
  //그래서 이렇게 avg를 만드는게 부담스러운 일!
  //이 경우 상속 할 수 있음!
}
  //상속을 사용하지 않고도 이 목적을 당연히 달성가능.
  //1. 위처럼 쓰는것
  //2. 클래스를 하나 더 만드는 것

// class PersonPlus{
//   constructor(name, first, second){ 
//     this.name = name;
//     this.first = first;
//     this.second = second;
//   }
//   sum(){
//     return 'prototype : '+(this.first + this.second);
//   }
//   avg(){
//     return (this.first + this.second) /2;
//   }
// }

// 그렇지만 이렇게 한다면 중복이 되니까.. 중복을 제거 하고싶은 마음이 생긴다!!
// 이걸 해결해 주는 것이 상속!!!

class PersonPlus extends Person{
  avg(){
    return (this.first + this.second) /2;
  }
}

// 이를 통해 값을 위와 똑같이 할 수 있다!!
// 그리고 맨 위의 Person의 함수를 수정하면 이를 상속하는 모든 함수가 동시다발적으로 수정된다..!!



let kim = new PersonPlus('kim', 10, 20);

console.log(kim.sum())
console.log(kim.avg())
