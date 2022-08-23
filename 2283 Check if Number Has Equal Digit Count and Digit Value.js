/**
 * @param {string} num
 * @return {boolean}
 */
 var digitCount = function(num) {
    num = [...num];
    let t = {};
    let j = {};
    num.forEach((n,i)=>{
        t[i] = n;
        j[n] ? j[n] = j[n] + 1 : j[n] = 1
    })
    for(key in j){
        t[key] = t[key] - j[key]
        if(t[key] !== 0) return false
    }
    return true
};