/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b)=> b[1]-a[1])
    let count = 0
    let sum = 0
    for(let i = 0; i < boxTypes.length; i++){
        if(count < truckSize){
            if(boxTypes[i][0] + count <= truckSize){
                sum += boxTypes[i][0] * boxTypes[i][1]
                
                count += boxTypes[i][0]
            }else if(boxTypes[i][0] + count > truckSize){
                let deff = truckSize - count 
                //console.log(deff)
                count += deff
                sum += deff * boxTypes[i][1]
            }
        }
    }
    return sum
    
};