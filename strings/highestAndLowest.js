//7kyu
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let arr = numbers
        .split(' ')
        .sort((a,b) => a-b);
    return `${arr[arr.length-1]} ${arr[0]}`
}

console.log(highAndLow('1 2 3 4 5'))
console.log(highAndLow('1 2 -3 4 5'))
console.log(highAndLow('1 9 3 4 -5'))