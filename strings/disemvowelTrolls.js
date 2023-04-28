// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// function disemvowel(str) {
//     let strArr = str.split('')
//     let newArr = []
//     for (let i=0; i<strArr.length; i++) {
//         if (strArr[i].toLowerCase() !== 'a' &&
//             strArr[i].toLowerCase() !== 'e' &&
//             strArr[i].toLowerCase() !== 'i' &&
//             strArr[i].toLowerCase() !== 'o' &&
//             strArr[i].toLowerCase() !== 'u') {
//                 newArr.push(strArr[i])
//             } 
//     }
//     return newArr.join('')
// }

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }

console.log(disemvowel('hello good sir'))