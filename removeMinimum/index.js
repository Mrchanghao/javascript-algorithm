// 매개변수로 숫자로 된 어레이가 있을 때 
// 그 중에서 가장 작은 엘리먼트를 제거하는 알고리즘 작성
// 어레이의 순서는 변경 불가

function removeItem(numbers) {
    let arr = Array.from(numbers);
    let data = Math.min(...numbers);
    let index = numbers.indexOf(data);
    if(index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

module.exports = removeItem;