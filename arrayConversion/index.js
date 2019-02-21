// arrayConversion
// arr가 주어진다 숫자로 된
// [1, 2, 3, 4, 5, 6]
// 홀수번째 반복에서는 각 연속 된 요소들의 합으로 된 어레이를 구하고 다음
// 짝수번째 반복에서는 각 연속 된 요소들의 곱으로 하여 최종적인 숫자를 구한다.. .
// [1 +2, 3 + 4, 5 + 6] --> [3, 7, 11] --> [3 * 7, 11] --> [21, 11] --> [21 + 11] 
// --> [32]
// 값은 32

const arrConversion = arr => {
 let isOdd = true;
 while(arr.length !== 1) {
  arr = sumProduct(arr, isOdd)
  isOdd = !isOdd
 }
 return arr[0]
}

const sumProduct = (num, isOdd) => {
  const sumProducts = [];
  if(isOdd) { // 홀수 이면
    for(let i = 0; i < num.length; i += 2) {
      sumProducts.push(num[i] + num[i + 1])
    }
  } else { // 짝수 인덱스
    for(let i = 0; i < num.length; i += 2) {
      sumProducts.push(num[i] * num[i + 1])
    }
  }
  return sumProducts;
}

console.log(arrConversion([1, 2, 3, 4, 5, 6]))