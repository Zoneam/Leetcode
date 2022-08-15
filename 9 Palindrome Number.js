/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {    
    x = x.toString();
    if(x.length === 1) return true
    const half = Math.floor(x.length / 2); 
    let first = x.slice(0,half)
    let second = x.slice(-half)
    if (first === [...second].reverse().join('')){
        return true
    }
    return false
};