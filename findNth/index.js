// 정수 배열과 정수 N이 주어지면 N번째로 큰 원소를 찾으시오 
// ([1, 2, 3, 4], 2) --> 3
// ([2, 4, -2, -3, 8], 1) --> 8
//  ([-5, -3, 1], 3) --> -5

function nTh(arr, n) {
    // 가장 큰수로 sorting 한다
    var sortedArr = arr.sort((a, b) => {
        return b - a
    });
    return sortedArr[n - 1];
}

module.exports = nTh;

// 0 -> 1  1-> 2
