/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let reverseX = (x < 0 ? '-' : '') + String(x).split('').reverse().join('');
    if(Math.abs(parseInt(reverseX)) > 2147483648) return 0;
    return parseInt(reverseX)
};