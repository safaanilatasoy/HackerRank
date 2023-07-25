function main() {
    const n = parseInt(readLine().trim(), 10);
    let temp;
    let arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    temp = arr.reverse();
    temp = temp.join(" ");
     console.log(temp);
}