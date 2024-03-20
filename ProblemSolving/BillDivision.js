function bonAppetit(bill, k, b) {
    let sum = 0;
    let annaSum =0;
    for(let i=0; i<bill.length; i++){
        sum += bill[i]
    }
    annaSum = sum - bill[k]
    
    if(annaSum/2 == b){
        console.log("Bon Appetit")
    }else {
        console.log((sum-annaSum)/2)
    }

}