function miniMaxSum(arr) {
    let minimum = Infinity;
    let maximum = -Infinity;
    let arrSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
        if (arr[i] > maximum) {
            maximum = arr[i];
        }
    }