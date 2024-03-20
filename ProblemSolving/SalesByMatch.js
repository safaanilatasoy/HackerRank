function sockMerchant(n, ar) {
    let pairCounts = {}; 
    let pairCount = 0; 

    
    for (let i = 0; i < n; i++) {
        const currentSock = ar[i];
        
        if (pairCounts[currentSock]) {
            pairCount++;
            pairCounts[currentSock] = 0; 
        } else {
            pairCounts[currentSock] = 1;
        }
    }

    return pairCount;
}
