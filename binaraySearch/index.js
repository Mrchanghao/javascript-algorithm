var mArray =[];

var searchNum = undefined;

(function() {
    process.argv.forEach(function(val, index, array) {
        var idx = 0, ar = undefined;
        try {
            if(index === 2) {
                mArray = mArray.concat(val.split(', ').map(function(num) {
                    return parseInt(num);
                }))
            }
            if(index === 3) {
                searchNum = parseInt(num);
            }
        } catch(e) {
            console.log(e);
        }
    })
})();

function binary_search(numberArray, numberToSearch, lowIndex, maxIndex) {
    var totalLength = maxIndex - lowIndex;
    var midIndex = parseInt(totalLength / 2);
    var str = '';
    if(lowIndex === maxIndex) {
        return '찾을 수 없음';
    }
    midIndex = lowIndex + midIndex;
    if(numberArray[midIndex] === numberToSearch) {
        str = `찾으려는 ${numberToSearch} , ${midIndex}에 위치한다.`
        return str;
    } else if(numberArray[midIndex] < numberToSearch) {
        lowIndex = midIndex + 1;
    }
    
}