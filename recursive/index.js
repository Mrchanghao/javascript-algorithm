// 연속된 숫자의 합
// function sum(number) {
//     let acc = 0;
//     for(let i = 0; i <= number; i++) {
//         acc += i
//     }
//     return acc;
// }
// 이 코드를 재귀적으로 바꿔 보자 
 function sum2(number) {
    if(number > 0) {
      return number + sum2(number - 1)
    } else {
        return 0;
    }
}

// 메모이제이션 
const sum3 = (function (number) {
    var save= {};
    var fact = function(number) {
        if(number > 0) {
            var saved = save[number -1] || fact(number -1);
            var result = number + saved;
            save[number] = result;
            return result;
        } else {
            return 0;
        }
    }
    return fact;
})()

const fibo = function(num) {
    if(num < 2) {
        return num;
    } else {
        return fibo(num -1) + fibo(num -2);
    }
}

// const sum = sum2;

// 메모이제이션 사용
const sum = sum3


module.exports = sum