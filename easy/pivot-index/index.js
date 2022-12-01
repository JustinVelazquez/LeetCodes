// 724. Find Pivot Index

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

function pivotIndex(arr) {
  let totalSum = 0;
  let leftSum = 0;

  totalSum = arr.reduce((a, c) => a + c);

  for (let i = 0; i < arr.length; i++) {
    let rightSum = totalSum - arr[i] - leftSum;

    if (rightSum === leftSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

console.log(3, pivotIndex([1, 7, 3, 6, 5, 6]));
