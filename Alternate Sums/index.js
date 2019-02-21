// [1, 2, 3, 4, 5] --> [a, b] ==> [1 + 3 + 5, 2+ 4]
// 첫번째 합은 홀수번째 엘리먼트 두번째 합은 짝수번째 엘리먼트들의 합으로 

const alterNateSums = (arr) => {
  let first = 0;
  let second = 0;
  let result = [];
  arr.forEach((el, index) => {
    if(index % 2 === 0) {
      first += el;
    } else {
      second += el;
    }
  });
  
  return [first, second];
}
console.log(alterNateSums([1, 2, 3, 4]))