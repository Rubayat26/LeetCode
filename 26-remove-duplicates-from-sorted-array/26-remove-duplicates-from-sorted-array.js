/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
    
//     for (i=0; i<nums.length ; i++){
//                                                     // if (nums[i]===nums[i+1]){
//                                                     //  nums.splice(i+1, 1)
//                                                     // }
//                                                     // for (j=i+1;j<nums.length; j++){
//             while (nums[i]===nums[i+1]){
//                                                     //console.log(nums[j])
//                 nums.splice(i,1);
//                                                         //console.log(nums);
//                                                     // }
//         }
        
//     }
//                                                     // console.log(nums);
// };


var removeDuplicates = function(nums) {
    
 let i = 0;
 let j = 1;
    
    for (j=1;j<nums.length;j++){
     
        
        if (nums[j]!==nums[i]){
            i +=1;
            nums[i]=nums[j]
        }
       // if (nums[j]===nums[i]){
       //     //continue
       // } else {
       //     i += 1;
       //     nums[i]=nums[j]
       // }
        
        
}

    return i+1;
    
}
