const reverseString = function(string) {
    const charsArray = string.split('')
    let reversedStr = ''
    for(let i = charsArray.length - 1; i >= 0; i--) {
        reversedStr += charsArray[i]
    }
    return reversedStr
};

// Do not edit below this line
module.exports = reverseString;
