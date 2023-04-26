//8kyu

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

function numberToString(num) {
    return `${num}`
}

console.log(numberToString(1234))
console.log(numberToString2(1234))

function numberToString2(num) {
    return num.toString();
}