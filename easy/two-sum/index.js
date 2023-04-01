/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Following has a Time Complexity of O(N^2) Quadratic
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[j] === target - nums[i]) {
//                 return [i, j]
//             }
//         }
//     }
// }

// Following has a T.C of O(N) Linear
function twoSum(nums, target) {
  let numObject = {};

  for (let i = 0; i < nums.length; i++) {
    let otherNum = target - nums[i];
    console.log(numObject, otherNum);
    if (numObject[otherNum] !== undefined) {
      return [numObject[otherNum], i];
    }
    numObject[nums[i]] = i;
  }
}

// Test Case
// [11,15, 2,7], 9  =>> [2,3]
console.log(twoSum([11, 15, 2, 7], 9));
