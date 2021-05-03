// <9> Designing Recursion : 순환 알고리즘의 설계

// 기본적인 개념
// 적어도 하나의 base case, 즉 순환되지 않고 종료되는 case가 있어야 함.
// 모든 case는 결국 base case로 수렴해야 함.

// ***암시적(implicit) 매개변수를 명시적(explicit) 매개변수로 바꾸어라.

// 예시 : 순차탐색
// 이 함수의 미션은 arr에서 n 직전의 숫자 이내에서 
// target과 같은 숫자가 있다면 해당 인덱스를 리턴하는 것.
const search01 = function(arr, n, target) {
  for(let i = 0; i < n; i++) {
    if(arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// console.log(search01([1,2,3,4,5], 4, 3))

// 개인적으로 이 문제는 자바를 기반으로 한 강의로 하다보니 js랑은 좀 다른 점이 있는데,
// 이런 관점에서 아래와 같이 렝스로 범위를 수정해도 될 것 같다.
// const search01 = function(arr, target) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(search01([1,2,3,4,5], 3))

//이번엔 begin과 end를 설정하여 target의 인덱스를 검사하게 하자
const search02 = function(arr, begin, end, target) { // 즉, 검색구간의 시작점을 명시적으로 지정 하는 것!
  if(begin > end) {
    return -1;
  } else if(target === arr[begin]) {
    return begin;
  } else {
    return search02(arr, begin+1, end, target);
  }
}

// console.log(search02([1,2,3,4,5], 1, 4, 3))


//BST와 다른 순차탐색 - 다르다고는 하는데 같은거 같은데..?
const search03 = function(arr, begin, end, target) {
  if(begin > end) {
    return -1;
  } else {
    let middle = Math.round((begin+end) / 2);

    if(arr[middle] === target) {
      return middle;
    }

    let index = search03(arr, begin, middle-1, target);

    if(index !== -1) {
      return index;
    } else {
      return search03(arr, middle+1, end, target)
    }
  }
}

// console.log(search03([1,2,3,4,5,6,7,8,9,10], 1, 10, 2));


//최댓값 찾기
const findMax = function(arr, begin, end) {
  if(begin === end) {
    return arr[begin];
  } else {
    return Math.max(arr[begin], findMax(arr, begin+1, end)) // 이게 재귀로 끝까지 이어지면서 최종 값을 찾아내어 반복비교하는 것!
  }
}

console.log(findMax([1,2,3,4,5], 1, 4));





// <10> Binary Search : 이진검색

// 이진 검색은 데이터의 크기가 정렬되어 있을 때 쓸 수 있는 방법
// 시작과 끝, 그리고 중간을 기점으로 작으면 시작쪽으로 크면 끝쪽으로 탐색을 진행하는 것.
const bst = function(arr, target, begin, end) { // 자바랑 코드 형식이 달라서 그냥 이렇게 쓰는게 맞는것 같음.
  arr.sort(function(a,b){
    return a-b;
  });

  if(begin > end) {
    return -1;
  }
  
  let middle = Math.round((begin + end) / 2);

  if(target === arr[middle]) {
    return middle;
  }

  if(target > arr[middle]) {
    return bst(arr, target, middle+1, end);
  } else {
    return bst(arr, target, begin, middle-1);
  }

}

console.log(bst([1,2,3,4,5,6,7,8,9,10], 8, 0, 9))