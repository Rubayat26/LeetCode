/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum = -Infinity;
  let currentMax =0;
    
  for (i=0;i<nums.length;i++){
      currentMax = Math.max(nums[i], currentMax+nums[i]);
      maxSum = Math.max(maxSum, currentMax);
      
  }
    return maxSum;
};