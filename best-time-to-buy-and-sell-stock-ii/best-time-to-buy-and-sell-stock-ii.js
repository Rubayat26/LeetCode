/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
   let profit = [];
    
   for(i=0; i<prices.length-1; i++){
       if (prices[i+1]>prices[i]){
           tmp = prices[i+1]- prices[i];
           profit.push(tmp);
       }
   } 
   
   if (profit.length === 0){

    return 0;
       
   } else {
    
       const totalProfit = profit.reduce((a, b) => a + b );
    
       return totalProfit;
   }
    

};