/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
 
    

//     let k= 0;
//     let i = s.length-1;
    
//     let j= [];
    
//     while (i>=0){
//         j.push(s[i]);
//         i--;
//         k++; 
//     }
    
//     for (i=0; i<s.length;i++){
//         s[i]=j[i]
//     }
    
    
    
    
// };





var reverseString = function(s) {
    let pointer1 = 0;
    let pointer2 = s.length-1;

    while(pointer1<pointer2){

    let temp=s[pointer1];
    s[pointer1]=s[pointer2];
    s[pointer2]=temp;
    
    pointer1++;
    pointer2--;
}
};