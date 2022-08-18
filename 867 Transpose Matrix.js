/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    return matrix[0].map((c, i) => matrix.map(r => r[i]));
    };