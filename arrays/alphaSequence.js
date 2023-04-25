//7kyu
//might be fun to try this a better way eventually

// In this kata you will be given a random string of 
// letters and tasked with returning them as a string of 
// comma-separated sequences sorted alphabetically, 
// with each sequence starting with an uppercase character 
// followed by n-1 lowercase characters, where n is the 
// letter's alphabet position 1-26.

function alphaSeq (str) {
    let arr = str.toLowerCase().split('');
    let sortedArr = arr.sort();
    let charCodeArr = []
    sortedArr.forEach(letter => {
       let code = letter.charCodeAt() - 96;
       charCodeArr.push(letter.repeat(code))
    })
    let capCharCodeArr = charCodeArr.map(word =>{
        const firstLetter = word.charAt(0).toUpperCase();
        const rest = word.slice(1).toLowerCase();
        return firstLetter + rest;
    });

    return capCharCodeArr.join(',');
}


console.log(alphaSeq("ZpglnRxqenU"));