// input m, n  --> 
// m명이 n개의 캔디를 나누면 한 사람이 가지는 최대값과 m의 곲을 구하면 됨

function candies(n, m) {
  return Math.floor(m / n) * n
};

//test
console.log(candies(3, 11)) // --> 9

