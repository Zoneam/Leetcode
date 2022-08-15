/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let row = new Array(n).fill(1)
    let newRow = new Array(n).fill(1)
    for(let i = 0; i< m-1;i++){
        
        for (j = n-2; j > -1; j--){
            newRow[j] = newRow[j+1] + row[j] 
        }
        row=newRow
    }
    return row[0]
};