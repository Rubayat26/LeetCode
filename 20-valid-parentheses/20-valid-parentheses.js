/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let stack = [];
    let map = {
        '(':')',
        '{': '}',
        '[': ']'
    }
    
    for( i=0; i<s.length; i++){
        
        if (s[i]==='(' || s[i]==='{' || s[i]==='['){
            stack.push(s[i]);
        }
        
        else {
            let lastEl = stack.pop();
            if (s[i] !== map[lastEl]){
                return false;
            } 
            // else {
            //     return true;
            // }
        }
    }
    if (stack.length !== 0) {return false};
    
    return true
};