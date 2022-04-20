/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let i=0; i<nums.length-1; i++){
        for(j=i+1; j<nums.length; j++){
            
            if(nums[i]==nums[j]){
                
                return true;
                } 
        }
    } 
    return false;
    
};




// var containsDuplicate = function(nums) {
//     let map = new Set();
//     for(let i=0;i<nums.length;i++){
//         let val = nums[i];
//         // console.log(map.has(val));
//         if(map.has(val)){
//             return true
//         } else {
//             map.add(nums[i])
//         }
//     }
//     // console.log(map)
//     return false
//     }