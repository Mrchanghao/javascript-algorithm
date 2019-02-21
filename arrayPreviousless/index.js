// arr --> [3, 5, 2 ,4 ,5] --> [-1, 3, -1, 2, 4];
// 인풋값 어레이에 arr[i]값의 왼쪽과 비교하여 값이 있으면 그 값으로 대체 하고 없으면 -1로

function arrayPreviousLess(arr) {
  let result = []
  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i] < arr[i - 1] && arr[1]) result.push(-1);
  //   arr[i] = arr[i - 1];
  //   result.push(arr[i]);
  // }
  for(let i = arr.length -1; i >= 0; i--) {
    for(let j = i; j >= 0; j--) {
      if(arr[i] > arr[j]) {
        result.unshift(arr[j]);
        break;
      } else if(j === 0) {
        result.unshift(-1)
      }
    }
  }
  return result;
};

console.log(arrayPreviousLess([3, 5, 2 ]));