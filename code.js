/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const b = {};
    for (let num of nums){
        b[num] = b[num] + 1 || 1;
    }
    for (let key in b) {
        if (b[key] === 1) {
            return key;
        }
    }
};
