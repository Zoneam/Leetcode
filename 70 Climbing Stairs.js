/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let preprev = 1  
    let prev = 1  

    for (let i= 2; i<n+1;i++){
      let dp = preprev + prev
      prev = preprev
      preprev = dp
    }


    return preprev
};