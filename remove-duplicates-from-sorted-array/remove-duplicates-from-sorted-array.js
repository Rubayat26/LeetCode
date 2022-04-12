/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    for (i=0; i<nums.length-1 ; i++){
        // if (nums[i]===nums[i+1]){
        //  nums.splice(i+1, 1)
        // }
        for (j=i+1;j<nums.length; j++){
            while (nums[i]===nums[j]){
                //console.log(nums[j])
                nums.splice(j,1);
                //console.log(nums);
            }
        }
        
    }
    console.log(nums);
};