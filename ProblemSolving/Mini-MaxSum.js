function miniMaxSum(arr) {
    // Write your code here
    arr = arr.sort((a, b) => a - b);
    let min = 0;
    let max = 0;
    let sum = 0;
    for(let i=0; i<arr.length; i++){
       sum += arr[i]
    }
    min = sum - arr[arr.length-1]
    max = sum - arr[0]
    console.log(min,max)

}