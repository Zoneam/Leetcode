/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let retCommonPrefix = [];
    let sampleWord = [...strs[0]];
    if (strs.length === 1) return strs.join('');
    let nextWord = [];
    for(let i = 0; i <= sampleWord.length - 1; i++){
        for(let j = 1; j < strs.length; j++){
            nextWord = [...strs[j]]
            if(sampleWord[i] === nextWord[i] && j === strs.length - 1){
                retCommonPrefix.push(sampleWord[i])
            } else if(sampleWord[i] !== nextWord[i]) return retCommonPrefix.join('')
        }
    }
return retCommonPrefix.join('')
};