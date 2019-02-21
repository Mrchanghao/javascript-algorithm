// alphabetical Shift  a -> b  c -> d
const alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

const alpha = {
  'a': 'b',
  "b": "c",
  'c': 'd',
  "d": 'e',
  "e": 'f',
  "f": "g",
  'g': 'h',
  'h': 'i',
  'i': 'j',
  'j': 'k',
  'k': 'l',
  'l': 'm',
  'm': 'n',
  'n': 'o',
  'o': 'p',
  'p': 'q',
  'q': 'r',
  'r': 's',
  's': 't',
  "t": 'u',
  'u': 'v',
  'v': 'w',
  'w': 'x',
  'x': 'y',
  'y': 'z',
  'z': 'a'
}

const alphabeticalShift = (str) => {
  let inputShifted = str.split('');

  // for(let i = 0; i < inputShifted.length; i++) {
  //   let index  = 0;
    
  //   if(inputShifted[i] !== 'z') {
  //     index = alphabet.indexOf(inputShifted[i]) + 1; 
  //   }
  //   inputShifted[i] = alphabet[index];
  // }
  // return inputShifted.join('');
  for(let i = 0; i < inputShifted.length; i++) {
    inputShifted[i] = alpha[inputShifted[i]];
  }
  return inputShifted.join('')
};

console.log(alphabeticalShift('cra')); // expect dsbaz