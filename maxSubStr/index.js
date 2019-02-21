

function maxSubStr(str) {
    let strArr = str.split('');
    let set = new Set(strArr);
	return set.size
}

console.log(maxSubStr('aabbb'))

module.exports = maxSubStr;