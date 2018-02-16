// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   // const arr = str.split('');
//   // arr.reverse();
//   // return arr.join('');
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   let reversed = '';
//   // for(let i = 0; i < str.length; i++) {
//   //   str[i].push(arr)
//   // }
//   for(let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// answer3;

function reverse(str) {
  debugger
  return str.split('').reduce((reversed, char)=> {
    return char + reversed; 
  }, '');
}


var strr = reverse('aabb');
console.log(strr);
module.exports = reverse;
