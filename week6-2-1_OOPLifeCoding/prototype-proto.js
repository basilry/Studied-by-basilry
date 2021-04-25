// function Person(){};
// new Person = new Function();
// //이 두개는 같은 것!!


function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

// Person이라는 객체와 Person's prototype이라는 객체가 있다
// 이 두 가지는 연관되어 있다.
// Person.prototype === Person's prototype 객체
// Person's prototype의 constructor === Person

Person.prototype.sum = function(){}
//이걸 만드는 이유는 퍼슨이라는 원 객체에 sum이 없어서 만듦!

let kim = new Person('kim', 10, 20)
//이후 이걸 만들게 되면 Kim이라는 객체가 생성 된다!
// 그 객체에는..
//__proto__, name, first, second를 포함한다

//kim이라는 객체를 생성한 Person.prototype === kim.__proto__이 되고,
//이는 곧 Person's prototype을 가리키게 된다

//그럼 Person.prototype을 통해서도 Person's prototype에 접근이 가능하고,
//kim.__proto__를 통해서도 Person's prototype에 접근이 가능하다.

let lee = new Person('lee', 10, 10)
//이게 만들어져도 똑같이 __proto__와 나머지 내용도 포함

console.log(kim.name)
//여기서 이걸 한다면..
// 먼저 kim 안에 있는지 찾는다. 있으면 출력한다.
// 혹시 없다면? __proto__가 가리키는 객체에 name이 있는지를 찾는다.

console.log(kim.sum())
//이걸 한다면?
// kim 안에 없으니까 __proto__가 가리키는 Person's prototype에서 찾는다.
// 있으니까 실행된다.
//만약 없다면?? 그럼 Person's prototype이 __proto__로 가리키는 또 누군가를 찾는다.

//어떤 값을 우리가 사용하려고 할때, 
//어떤 데이터를 근거로 해서, 어디에서,
//그 객체가 갖고있지 않은 sum과 같은 애들을 사용하는가를 설명할 수 있어야 한다.

//그래서 요약하자면..
//prototype은 object관련
//__proto__는 link관련
//이렇게 생각하면 편하다!!