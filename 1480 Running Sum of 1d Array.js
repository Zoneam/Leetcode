/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let runningArr = []
    nums.forEach((num,i) => {
        let newArray = nums.slice(0, i+1)
        let running = newArray.reduce(function (x, y) {
            return x + y;
        }, 0);
        runningArr.push(running)
    })
    return runningArr
};