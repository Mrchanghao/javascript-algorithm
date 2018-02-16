// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
//************내 풀이 테스트 미통과********************** */
// function reverseInt(n) {
//   var result = '';
//   var  chars = n.toString();
//   for(let char of chars) {
//    result = result + char
//   }
//   return Number(result);
// }
// console.log(reverseInt(34));
/************************************************************/ 

// function reverseInt(n) {
//   const reversed =  n.toString().split('').reverse().join('');
//   if( n < 0) {
//     return parseInt(reversed) * -1;
//   } else {
//     return parseInt(reversed);
//   }
// }
// 위에 알고리즘은 리턴을 두번 실행 하므로 Math.sign(x)로 리턴을 한번으로 줄인다

function reverseInt(n) {
  const reversed =  n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}


module.exports = reverseInt;
