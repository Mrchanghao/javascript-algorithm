// ex longestword('hello my name is changho') return changho
// ex longestword('there is there, my name is brad') return there

function longestword(sen) {
    const wordArr = sen.toLowerCase().split(' ')
    
    const sorted = wordArr.sort((a, b) => b.length - a.length)

    const longestWordArr = sorted.filter((word) => word.length === sorted[0].length)

    if(longestWordArr.length === 1) {
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
}

module.exports = longestword;