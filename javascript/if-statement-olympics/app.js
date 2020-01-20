
// //If Statement Olympics
// 18 OCTOBER 2017
// The exercise will get progressively harder. You should at least strive to get one medal, but please try to go the extra mile!

// Also, feel free to practice using ternary statements for extra credit too!

// Preliminaries
// Write an if statement that prints "is greater than" if 5 is greater than 3
// Write an if statement that prints "is the length" if the length of "cat" is 3
// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.

// preliminaries #1
// if (5 > 3){
//   console.log('is greater than')
// }

// preliminarie #2
// var cat = 3
// if (cat.length === cat.legth){
//   console.log('is the length')
// }


// // preliminaries #3
// if ('cat' !== 'dog'){
//   console.log('not the same')
// }
// else {
//   console.log('is the same')
// }


// Bronze Medal
// Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough 
// (18 or older), and the opposite if they are not older than 18.
// var person = {
//   name: "Bobby",
//   age: 12
// }
// Using that same object, only allow them into the movie if their name starts with "B"
// Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.

// Bronze Medal #1
// var person = {
//   name: 'Bobby',
//   age: 12
// }
// if (age => 18){
//   console.log('Bobby is allowed to go to the movie')
// }

// // Bronze Medal #2
// if (name[1] === B){
//   console.log('is allowed to go to the movie')
// }

// // Bronze Medal #3
// if (name[1] === B && age => 18){
//   console.log('is allowed to go to the movie')
// }

// Silver Medal
// Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, 
// and prints "not equal at all" if it doesn't print the other stuff.
// Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4

// Silver Medal #1
// if (1 === 1){
//   console.log('strict')
// }
// if (1 == 1){
//   console.log('loose' || 'abstract')
// }
// else {
//   console.log('not equal at all')
// }

//Silver Medal #2
// if (1 <= 2 && 2 === 4){
//   console.log('yes')
// } 

// Gold Medal
// Gold may take some googling!

// Write an if statement that checks to see if "dog" is a string
// Write an if statement that checks to see if "true" is a boolean
// Write an if statement that checks to see if a variable has been defined or not
// Write an if statement asking if "s" greater than 12?
// Try it with a few more letters and a few numbers.

// Write a ternary statement that console.logs whether a number is odd or even. For example:
// var myNum = 10;
// // Write your ternary here to log if `myNum` is odd or even.
// (It should continue to work correctly even if myNum changes to a different number).

// Gold Medal #1

// var myStatement = 'dog'
// if (myStatement === stringValue){
//   console.log('is a string')
// }


if (typeof myStatement === 'string' || myStatement instanceof String){
  console.log('it is a string')
}