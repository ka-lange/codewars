//6kyu

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
//     let counts = {};
// for (let num of A) {
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// } 
// // return counts
// return Number(Object.keys(counts).find((key) => counts[key] == ((counts[key] % 2) !== 0)));
for (let i = 0; i < A.length; i++) {
    const count = A.filter(value => value === A[i]).length;
    if (count % 2 == 1) {
        return A[i];
    }
}
}

// function findOdd(A) {
//         let aString = A.sort((a,b)=> a-b)
//         return aString
// } 

console.log(findOdd([7])) //7
console.log(findOdd([0])) //0
console.log(findOdd([1,1,2])) //2
console.log(findOdd([0,1, 1 ,0,0])) //0 SOMETHING HAPPENS WHEN THE NUMBER OCCURS MORE THAN TWICE


// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).