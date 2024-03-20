function diagonalDifference(arr) {
    let dia1 = 0;
    let dia2 = 0;
    for(let i=0; i<arr.length; i++){
        dia1 += arr[i][i];
        dia2 += arr[i][arr.length - i - 1];
    }
    return Math.abs(dia1-dia2)
}