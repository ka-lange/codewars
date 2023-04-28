// Write a function that takes in a string of one or more words, and 
//returns the same string, but with all five or more letter words reversed 
//(Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

function spinWords(string){
    let arr = string.split(' ')
    let newArr = []
    for (let i = 0; i<arr.length; i++){
        let wordArr = arr[i].split('')
        if(wordArr.length >= 5) {
            newArr.push(wordArr.reverse().join(''))
        } else newArr.push(wordArr.join(''))
        
    }
    return newArr.join(' ')
}

  console.log(spinWords('Welcome')) 
  console.log(spinWords("Hey fellow warriors"))