function migratoryBirds(arr) {
    let birdCounts = {}; // Object to store the frequency of each bird type

    // Iterate through the array to count the occurrences of each bird type
    for (let i = 0; i < arr.length; i++) {
        // If the bird type is already encountered, increment its count
        if (birdCounts[arr[i]]) {
            birdCounts[arr[i]]++;
        } else {
            // If encountering the bird type for the first time, set its count to 1
            birdCounts[arr[i]] = 1;
        }
    }

    let mostCommonBird = -1; // Initialize the most common bird type
    let maxCount = -1; // Initialize the maximum count

    // Iterate through the birdCounts object to find the most common bird type
    for (let birdType in birdCounts) {
        if (birdCounts[birdType] > maxCount) {
            mostCommonBird = birdType;
            maxCount = birdCounts[birdType];
        }
    }

    return mostCommonBird;
}