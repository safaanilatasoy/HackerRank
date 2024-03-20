let sum = 0;
function simpleArraySum(ar) {
    console.log(ar.length)
    for(let i=0; i<ar.length; i++){
        sum += ar[i];
    }
    return sum
    
}