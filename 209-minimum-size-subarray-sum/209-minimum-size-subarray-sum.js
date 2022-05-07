/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    let result = Infinity;
    
    let left= 0;
    let sum = 0;
    
    for (i=0;i<nums.length; i++){
        sum += nums[i];
    
    
        while(sum>=target){
            let currSubarrSize = (i+1)-left;

            result = Math.min(result,currSubarrSize);
            console.log(result);
            sum -= nums[left];
            left += 1;
        }
    }
    
    if (result !== Infinity){
        return result;
    } else {
        return 0;
    }
    
};