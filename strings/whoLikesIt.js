//6kyu

// You probably know the "like" system from Facebook 
// and other pages. People can "like" blog posts, 
// pictures or other items. We want to create the 
// text that should be displayed next to such an item.

// Implement the function which takes an array 
// containing the names of people that like an item. 
// It must return the display text as shown in the examples:

function likes(names) {
    if (names.length === 0) {return `no one likes this`}
    else if (names.length === 1) {return `${names[0]} likes this`}
    else if (names.length === 2) {return `${names[0]} and ${names[1]} like this`}
    else if (names.length ===3){return `${names[0]}, ${names[1]} and ${names[2]} like this`}
    else if (names.length > 3) {
        let likeCount = 0;
        let likeStatement = `${names[0]}, ${names[1]}`
        for(let i = 2; i<names.length; i++){
            likeCount ++;
        } return `${likeStatement} and ${likeCount} others like this`
    }
}

console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Peter', 'Mark', 'k']))
console.log(likes(['Max', 'John', 'Mark', 'Karissa', 'Devin']))