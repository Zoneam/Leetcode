/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let charArr = s.split('')
    let length = 0;
    let subStr;
    let subStrArr = [];
    if (charArr.length === 0) return 0
    charArr.forEach((char,j) => {
        length = 0;
        subStr = char;
        for(let i = j+1; i <= charArr.length-1; i++){
            if(charArr[i] !== char && charArr.length !== j && !subStr.includes(charArr[i])){
                 length++;
                 subStr += charArr[i]; 
            } else break
        }          
        subStrArr.push(subStr)
    })
    subStrArr = subStrArr.sort((a,b) => b.length - a.length)
    return subStrArr[0].length
};