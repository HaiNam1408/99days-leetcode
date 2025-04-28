/* Medium
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

Constraints:
- 1 <= nums.length <= 105
- -231 <= nums[i] <= 231 - 1
- 0 <= k <= 105
*/

//Solution 1:
function rotate(nums: number[], k: number): void {
    for (let i = 0; i < k; i++) {
        let last: number = nums.pop() ?? 0;
        nums.unshift(last);
    }
};

//Solution 2:
function rotate2(nums: number[], k: number): void {
    let len = nums.length;
    k = k % len;
    let temp = nums.splice(len - k, len);
    nums.unshift(...temp);
};