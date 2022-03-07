/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (Math.sign(x)===-1){
        return false;
    }
    let reverse = parseInt(x.toString().split('').reverse().join(''));
    
    if (x===reverse){
        return true;
    }
    
    return false;
};