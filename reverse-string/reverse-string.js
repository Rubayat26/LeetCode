/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
 
    

    let k= 0;
    let i = s.length-1;
    
    let j= [];
    
    while (i>=0){
        j.push(s[i]);
        i--;
        k++; 
    }
    
    for (i=0; i<s.length;i++)
        s[i]=j[i]
   
};