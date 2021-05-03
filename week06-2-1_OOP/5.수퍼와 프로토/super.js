class Person{
  constructor(name, first, second){ 
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum(){
    return this.first + this.second;
  }
}

class PersonPlus extends Person{
  constructor(name, first, second, third){ 
    super(name, first, second);
    //super를 왜쓰지? : 부모 클래스와 내가 갖고있는 공통적인 부분을 제거하는 것!
    //1. super 뒤에 ()가 붙으면 부모클래스의 생성자. 
    // >> 즉, PersonPlus의 부모클래스인 Person의 생성자인 constructor가 호출된다!
    //2. 또한 부모클래스의 내용을 가져와서 추가적인 작업을 할 수 있다. 22번줄과 같이!
    this.third = third;
  }
  sum(){
    return super.sum()+this.third; // 이렇게 하면 부모클래스에 갖고 있는 값을 가져오는 것!
  }
  avg(){
    return (this.first + this.second + this.third) /3;
  }
}

let kim = new PersonPlus('kim', 10, 20, 30);

console.log(kim.sum())
console.log(kim.avg())