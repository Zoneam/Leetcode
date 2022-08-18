/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    let myObj ={};
    let returnArray = [];
    let sortableArray = [];
    for(let i = 0; i<mat.length; i++){
        myObj[i] = {1:0,0:0}
        for(let j = 0; j<mat[i].length;j++){
            if(myObj[i][mat[i][j]]){
                myObj[i][mat[i][j]]++
            } else {
                myObj[i][mat[i][j]] = 1
            }
        }
    }
    for (let obj in myObj) {
        sortableArray.push([obj, myObj[obj]]);
    }
    sortableArray.sort(function(a, b) {
        return a[1][1] - b[1][1];
    });
    for(let i = 0; i < k; i++){
        returnArray.push(sortableArray[i][0])
    }
    return returnArray
};