//ARRAY DIFFERENCE
// function arrayDiff(arrayA, arrayB){
//     arrayB.forEach(b => {
//      let newArray = arrayA.filter(a => a !== b);
//      console.log(newArray);
//     })
// }

// function arrayDiff(a, b) {
//     return a.filter(e => !b.includes(e)); //if the filter statement is true, element is added to newly made array - leaves out elements considered not true
//   }

// console.log(arrayDiff([1,2,3,3,4], [3]))

//square every digit of a number and concatenate them.

function squareDigits(num){
    //turn integer to string and back to array of numbers
      let digits = Array.from(String(num), Number);
      let newArray = [];
      digits.forEach(d => {
        newArray.push(Math.pow(d,2));
      })
      console.log(Number(newArray.join('')));
    }
    
    squareDigits(765)

function countSheeps(arrayOfSheep) {
  let presentSheep = 0;
  arrayOfSheep.forEach(sheep => {
    if(sheep === true){presentSheep += 1}
    else{presentSheep = presentSheep};
  })
  return presentSheep;
}
function countSheeps2(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
console.log(countSheeps2([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]))

//Warn the sheep in front of the wolf that it is 
//about to be eaten. 
//Remember that you are standing at the front of the queue which is at the end of the array:
function warnTheSheep(queue) {
  let wolfIndex = queue.indexOf("wolf");
  let sheepIndex = queue.length - wolfIndex - 1;
  if(sheepIndex==0){return "Pls go away and stop eating my sheep"}
  else {return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`};
}
//console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));


//Array plus Array

function arrayPlusArray(arr1, arr2) {
  return (arr1.reduce((sum, current)=> sum + current, 0)) + (arr2.reduce((sum, current)=> sum + current, 0))
}
// console.log(arrayPlusArray([1,2,3], [4,5,6]));



//"this" is a problem

function NameMe(first, last) {
  this.firstName= first;
  this.lastName= last;
  this.name = `${this.firstName} ${this.lastName}`; //had to change this from originally being a function
}
const n = new NameMe('John', 'Doe');
console.log(n);


function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
   
  this.isWorthIt = function(){
    if((this.draft-(this.crew * 1.5)) > 20){return true}
    else {return false}
  };
 }
 let titanic = new Ship(15,10);
 let emptyShip = new Ship(0,0);
 let aWorthyShip = new Ship(100,20);

 console.log(titanic.isWorthIt())
 console.log(emptyShip.isWorthIt())
 console.log(aWorthyShip.isWorthIt())




ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"

function Ghost(color) { 
  this.color = function() { 
    let number = Math.floor(Math.random()*4);
      if (number === 0){return 'white'}
      else if(number === 1){return 'yellow'}
      else if(number === 2){return 'purple'}
      else if (number === 3) {return 'red'}
  };
}

ghost = new Ghost();
console.log(ghost.color())


function addLength(str) {
  //start-here
  let splitStr = str.split(' ')
  return splitStr.map(str => `${str} ${str.length}`)
}
  

console.log(addLength("apple ban"))


//building blocks
// let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
//     b.getWidth() // -> 2
    
//     b.getLength() // -> 4
    
//     b.getHeight() // -> 6
    
//     b.getVolume() // -> 48
    
//     b.getSurfaceArea() // -> 88

//constructor object

// class Block{

//   constructor(data){
//     // ...
//   }
  
//   // ...
  
// }
class Block {
  constructor([width, length, height]) {
    this.width = width;
    this.length = length;
    this.height = height;
  }
  getWidth(){
    return this.width
  }
  getLength(){
    return this.length
  }
  getHeight(){
    return this.height
  }
  getVolume(){
    return this.width * this.length * this.height
  }
  getSurfaceArea(){
    return (2*(this.width*this.length)) + (2*(this.height*this.length)) + (2*(this.width*this.height))
  }

}
// function Block(width, length, height) { 
//   this.width = width;
//   this.length = length;
//   this.height = height;
//   this.getvolume = width * length * height;
//   this.getSurfaceArea = (2*(width*length)) + (2*(height*length)) + (2*(width*height));
// }



let newBlock = new Block([2,4,6]);
console.table(newBlock)
console.log(newBlock.getWidth())
console.log(newBlock.getLength())
console.log(newBlock.getHeight())
console.log(newBlock.getVolume())
console.log(newBlock.getSurfaceArea())





class Person {
  constructor(name) {
    this.name = name;
  }

  greet(greetWho) {
    return `Hello ${greetWho}, my name is ${this.name}`;
  }
}


let joe = new Person('Joe');
console.log(joe.name)
console.log(joe.greet('Kate'))



function positiveSum(arr) { 
  let sum = 0
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
  }
  return sum
}

console.log(positiveSum([1, 2, -3, 3, 4]))



function findAverage(array) {
  let total = array.reduce((sum, current) => sum + current, 0)
  return total/array.length;
}

console.log(findAverage([2, 4, 6, 8, 10]))