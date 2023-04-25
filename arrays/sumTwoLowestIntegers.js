//7kyu

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a,b)=> a-b);
    return sorted[0] + sorted[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
