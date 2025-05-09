/* Easy
You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is even.
You repeat the following procedure n / 2 times:
Remove the smallest element, minElement, and the largest element maxElement, from nums.
Add (minElement + maxElement) / 2 to averages.
Return the minimum element in averages.

Example 1:
Input: nums = [7,8,3,4,15,13,4,1]
Output: 5.5

Example 2:
Input: nums = [1,9,8,3,10,5]
Output: 5.5

Example 3:
Input: nums = [1,2,3,7,8,9]
Output: 5.0

Constraints:
- 2 <= n == nums.length <= 50
- n is even.
- 1 <= nums[i] <= 50
*/

// Solution:
function minimumAverage(nums: number[]): number {
    nums = nums.sort((a, b) => a - b);
    let averages = 0;
    while (nums.length > 0) {
        let max = nums.pop() ?? 0;
        let min = nums.shift() ?? 0;
        let avg = (max + min) / 2;
        if (averages == 0 || avg < averages) {
            averages = avg;
        }
    }

    return averages;
};