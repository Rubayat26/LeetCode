/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //let k = [];
    
    //s[0]=1;
    
//     let k= 0;
    
//     for (i=s.length; i<0; i--){
        
//         s[k]=s[i];
//         s.pop(i)
//         k++; 
        
//         //console.log(s[i])
        
//     }
    
    

    let k= 0;
    let i = s.length-1;
    //console.log(s[i])
    let j= [];
    
    while (i>=0){
        
        j.push(s[i]);
        //console.log(j)
        i--;
        k++; 
    }
    
    for (i=0; i<s.length;i++)
        s[i]=j[i]
   
};