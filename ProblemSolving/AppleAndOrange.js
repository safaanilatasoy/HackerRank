function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesCount = 0;
    let orangesCount = 0;
    
    for(let i=0; i<apples.length; i++){
        apples[i]=apples[i]+a
        if(apples[i]>=s && apples[i]<=t){
            applesCount++
        }
    }
    for(let i=0; i<oranges.length; i++){
        oranges[i]=oranges[i]+b
         if(oranges[i]>=s && oranges[i]<=t){
            orangesCount++
        }
    }
    console.log(applesCount+"\n"+orangesCount)
    

}