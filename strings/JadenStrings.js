var str = "How can mirrors be real if our eyes aren't real";

function capEveryWord(string) {
    let words = string.split(' ');
    for (let i=0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }
    return words.join(' ');
}

console.log(capEveryWord(str))

