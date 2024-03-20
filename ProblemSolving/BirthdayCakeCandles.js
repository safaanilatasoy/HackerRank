function birthdayCakeCandles(candles) {
    let maxNumber = 0;
    let maxCandles = 0;
    
    for(let i=0; i<candles.length; i++){
        if(candles[i]>maxNumber){
            maxNumber = candles[i]
        }
        
    }
    let filteredArray = candles.filter(item => item === maxNumber);
    return filteredArray.length;

}
